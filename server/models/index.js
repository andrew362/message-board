const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/twitter-clone', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

exports.User = require('./user');
exports.Message = require('./message');