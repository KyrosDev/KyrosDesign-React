const router = require('express').Router();
let Email = require('../models/Emails');

router.route('/').get((req, res) => {
    Email.find()
    .then(emails => res.json(emails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const date = Date.now();

  const newEmail = new Email({
    name,
    email,
    message,
    date,
  });

  newEmail.save()
  .then(() => res.json('Email added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req, res) => {
  Email.findByOne(req.params.email).then(emails => res.json(emails)).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;