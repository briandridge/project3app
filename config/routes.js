var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var resultsController = require('../controllers/results');

function authenticatedUser(req, res, next) {
// if authenticated, continue
	if (req.isAuthenticated()) return next();
// if not go home
	res.redirect('/');
}

router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

// router.route("/secret")
// 	.get(authenticatedUser, usersController.secret);

router.route('/results')
.post(resultsController.postResults);

module.exports = router;


// router.route('/users')
// .get(usersController.getAllUsers);