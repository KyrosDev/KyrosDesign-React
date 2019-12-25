const router = require('express').Router();
let Button = require('../models/Counter');

router.route('/').get((req, res) => {
    Button.find()
      .then(counter => res.json(counter))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
  console.log(Button)
  Button.find()
    .then(myCounter => {
      myCounter.username = req.body.counter;

      myCounter.save()
        .then(() => res.json('Counter updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;