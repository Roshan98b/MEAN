// jshint esversion : 6

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.ObjectId,
		ref: 'register'
	},
	_groupId: {
		type: mongoose.Schema.ObjectId
	},
	memberCount: {
		type: Number,
		required: true
	},
	groupName: {
		type: String,
		required: true
	}
});

var Group = mongoose.model('group', ModelSchema);

module.exports = Group;

// Create
module.exports.add = (model, callback) => {
	model.save(callback);
};

