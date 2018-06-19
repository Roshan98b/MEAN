// jshint esversion : 6

var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

var Member = require('../model/member'); 
var Login = require('../model/login');
var TempGroup = require('../model/tempgroup');

var router = express.Router();

// Login
router.post('/login', (req, res, done) => {
	passport.authenticate('local', (err, model, info) => {
    	if (err) {
      		return res.status(501).json(err);
    	}
    	if (!model) {
      		return res.status(501).json(info);
    	}
    	else req.logIn(model, (err) => {
      		if(err){
        		return res.status(501).json(err);
      		}
      		else return res.status(200).json(model);        
    	});
  	})(req, res, done);
});

// Register
router.post('/member', (req, res) => {
	
	var member = new Member({
		_id: new mongoose.Types.ObjectId(),
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age,
		email: req.body.email,
		contactno: req.body.contactno,
		gender: req.body.gender
	});
	Member.addUser(member, (err, model) => {
		if(err) {
			res.status(501).json(err);
			console.log(err);
		}
		else {
			var login = new Login({
				_id: model._id,
				username: req.body.username,
				password: req.body.password
			});			
			Login.add(login, (err, lmodel) => {
				if(err) {
					res.status(501).json(err);
					console.log(err);
				}
			});
			res.status(200).json({message: 'Add Member Success'});
		}
	});

});

// Authenticate: Send Data
router.get('/data', 
	(req, res, next) => {
		if(req.isAuthenticated()) next();
		else return res.status(401).json({messgae: 'Unautherized'});
	},
	(req, res, next) => {
		return res.status(200).json(req.user);
	}
);

// Create Group
router.post('/tempcreategroup',
	(req, res, next) => {
		if(req.isAuthenticated()) next();
		else return res.status(401).json({messgae: 'Unautherized'});
	},
	(req, res, next) => {
		var tempgroup = new TempGroup({
			_id: req.body._id,
			groupName: req.body.groupName
		});
		TempGroup.add(tempgroup, (err, model) => {
			if(err) {
				res.status(501).json(err);
				console.log(err);
			}else {
				res.status(200).json({message: 'Temp Group Created'});
			}
		});
	}
);

// Read all Temp Groups
router.get('/getalltempgroup',
	(req, res, next) => {
		if(req.isAuthenticated()) next();
		else return res.status(401).json({messgae: 'Unautherized'});
	},
	(req, res, next) => {
		TempGroup.getAll((err, tmodel) => {
			if(err) {
				res.status(501).json(err);
			}else {
				var obj = [];
				var flag = false;
				for(let i of tmodel) {
					Login.getById(i._id, (err, lmodel) => {
						console.log(i);
						obj.push({
							username: lmodel.username,
							groupName: i.groupName
						});
						if(obj.length == tmodel.length) res.status(200).json(obj);
					});
				}
			}
		});
	}
);


// Logout
router.get('/logout',
	(req, res, next) => {
		if(req.isAuthenticated()) next();
		else return res.status(401).json({messgae: 'Unautherized'});
	}, 
	(req, res, next) => {
		console.log('logout');
		req.logout();
		return res.status(200).json({message: 'Logout Success'});
	}
);

module.exports = router;