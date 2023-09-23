const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb+srv://pechr87:nierzDRlvg30wsum@cluster0.j0sd1j1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => { console.log('connected to db') });
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = { connect, disconnect };