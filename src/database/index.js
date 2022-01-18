const mongoose = require('mongoose');
const mongodb_connection = process.env.MONGODB_CONNECTION
mongoose.connect(`mongodb:${mongodb_connection}`);
mongoose.Promise = global.Promise;

module.exports = mongoose;