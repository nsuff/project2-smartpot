const router = require('express').Router();
const sequelize = require('../../config/connection');
const { FoodType, Potluck, User } = require('../../models');

router.get('/', (req, res) => {
    FoodType.findAll()
    .then(dbFoodTypeData => res.json(dbFoodTypeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    FoodType.findOne(req.body, {
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'description'
            [sequelize.literal('(SELECT (*) FROM foodtype WHERE foodtype.id = foodtype.potluck_id)')]
        ],
        include: [
            {
                model: Potluck,
                attributes: ['id', 'name', 'description', 'schedule_date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbFoodData => {
            if (!dbFoodData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbFoodData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  if (req.session) {req.body,
    FoodType.create({
      id: req.body.id,
      name: req.session.name,
      description: req.body.description
    })
      .then(dbFoodTypeData => res.json(dbFoodTypeData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.put('/:id', (req, res) => {
    FoodType.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbFoodTypeData => {
        if (!dbFoodTypeData) {
          res.status(404).json({ message: 'No food type found with this id' });
          return;
        }
        res.json(dbFoodTypeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
  if (req.session) {req.body,
    FoodType.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbFoodTypeData => {
        if (!dbFoodTypeData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbFoodTypeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
