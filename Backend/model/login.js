// jshint esversion : 6

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var ModelSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.ObjectId,
		ref: 'register'
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

var Login = mongoose.model('login', ModelSchema);

module.exports = Login;

// Read
module.exports.getByUsername = (username, callback) => {
	var query = {username : username}; 
	Login.findOne(query,callback);
};

// Read
module.exports.getById = (id, callback) => {
	Login.findById(id,callback);
};

// Create
module.exports.add = (model, callback) => {
	model.password = bcrypt.hashSync(model.password, 10);
	model.save(callback);
};
