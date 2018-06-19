// jshint esversion : 6

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	_id: mongoose.Schema.ObjectId,
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	age: {
		type: Number
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	contactno: {
		type: Number,
		required: true
	},
	gender: {
		type: String
	},
	_groupId: [{
		type: mongoose.Schema.ObjectId,
		refs: 'group' 
	}] 
});

var Member = mongoose.model('member', ModelSchema);

module.exports = Member;

// Create
module.exports.addUser = (model, callback) => {
	model.save(callback);
};

// Read
module.exports.getById = (id, callback) => {
	Member.findById(id, callback);
};
