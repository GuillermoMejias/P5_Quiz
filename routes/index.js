var express = require('express');
var router = express.Router();
const {models} = require('../models');
//const Sequelize = require('Sequelize');xdvxcvxcvvx

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

/* GET quizzes page. */
router.get('/quizzes',  function(req, res, next) {
	models.quiz.findAll().
	then( quizzes=> {
		res.render('quizzes', {quizzes});	
	})
	.catch(error => next(error));
	
});

module.exports = router;
