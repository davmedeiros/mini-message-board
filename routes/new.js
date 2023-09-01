const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('Working');
  res.render('form', { title: 'New Message' });
});

module.exports = router;
