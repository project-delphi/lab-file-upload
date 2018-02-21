const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/create', (req, res, next) => {
  res.render('create');
});

router.get('/show', (req, res, next) => {
  res.render('show');
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

module.exports = router;
