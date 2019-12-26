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
  const isResolved = false;

  const newEmail = new Email({
    name,
    email,
    message,
    isResolved,
  });

  newEmail.save()
  .then(() => res.json(true))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req, res) => {
  Email.findOne({"email": req.params.email}).then(emails => res.json(emails)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/res/:email').post((req, res) => {
  Email.findOneAndUpdate({"email": req.params.email})
  .then(email => {
      email.isResolved = req.body.isResolved;

      email.save()
      .then(() => res.json(true))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').delete((req, res) => {
  Email.findOneAndDelete({"email": req.params.email})
  .then(() => res.json(true))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;