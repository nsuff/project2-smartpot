const router = require('express').Router();
const { FoodType } = require('../../models');

router.get('/', (req, res) => {
    FoodType.findAll()
    .then(dbFoodTypeData => res.json(dbFoodTypeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  if (req.session) {
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
    FoodType.update(
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
  if (req.session) {
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
