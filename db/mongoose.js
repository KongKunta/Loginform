const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => { console.log('connected to db') });
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = { connect, disconnect };