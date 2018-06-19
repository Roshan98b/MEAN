// jshint esversion : 6

var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var Login = require('../model/login');
var Member = require('../model/member');

// Strategy 
passport.use(
	new Strategy({
		usernameField: 'username',
		passwordField: 'password'
	}, 
	(username, password, done) => {
		Login.getByUsername(username, (err, model) => {
			if(err) return done(err);
			if(model == null) return done(null, false, {message: 'Incorrect Username'});  
			else {
				if(bcrypt.compareSync(password, model.password)) return done(null, model);
				else return done(null, false, {message: 'Incorrect Password'});
			}
		});
	}
));

// Cookie 
passport.serializeUser((model, done) => {
  done(null, model._id);
});

passport.deserializeUser((id, done) => {
	Member.getById(id, (err, mmodel) => {
		Login.getById(id, (err, lmodel) => {
			var obj = {
				_id: mmodel._id,
				firstname: mmodel.firstname,
				lastname: mmodel.lastname,
				age: mmodel.age,
				email: mmodel.email,
				contactno: mmodel.contactno,
				gender: mmodel.gender,
				_groupId: mmodel._groupId,
				username: lmodel.username
			};
			done(err, obj);
		});
	});  
});