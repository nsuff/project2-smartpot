const router = require('express').Router();
const { FoodType } = require('../../models');

router.get('/', (req, res) => {
    // console.log(req.params);
    FoodType.findAll()
    .then(dbFoodTypeData => res.json(dbFoodTypeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    // console.log(req.params);
    FoodType.findOne({    
        where: {
            id: req.params.id
        },
    })
        .then(dbFoodTypeData => {
            console.log(dbFoodTypeData);
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

router.post('/', (req, res) => {
  // expects => {name: Midnight Snack, description: After dessert and before bedtime}
  if (req.session) {
    FoodType.create(req.body, {
      // id: req.body.id,
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
    // console.log(req.params);
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
    // console.log(req.params);
  if (req.session) {
    FoodType.destroy(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbFoodTypeData => {
        if (!dbFoodTypeData) {
          res.status(404).json({ message: 'No food type found with this id!' });
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
