const mongoose = require('mongoose');

var Appraisal = mongoose.model('Appraisal', {
	EmployeeID: { type: Number, required:true },
    Name: { type: String, required:true },
    Department: { type: String, required:true },
    Comments :{type: String, required:true},
    Rating: { type: Number, required:true }
});

module.exports = { Appraisal };