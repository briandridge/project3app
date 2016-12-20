var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

module.exports.User = require('./user');
module.exports.Results = require('./results');
