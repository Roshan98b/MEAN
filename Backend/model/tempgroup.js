// jshint esversion : 6

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.ObjectId,
		ref: 'register'
	},
	groupName: {
		type: String,
		required: true
	}
});

var TempGroup = mongoose.model('tempgroup', ModelSchema);

module.exports = TempGroup;

// Create
module.exports.add = (model, callback) => {
	model.save(callback);
};

// Read
module.exports.getAll = (callback) => {
	TempGroup.find({}, callback);
};