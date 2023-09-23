const mongoose = require('mongoose');

async function saveUser(username, password) {
    const User = require('./userSchema');
    const user = new User({ username, password });
    
    try {
        await user.save();
        console.log('User saved successfully');
    } catch (err) {
        console.error('Error saving user:', err);
        throw err; // Kast fejlen videre, så den kan håndteres af det kaldende kode.
    }
    mongoose.disconnect();
}

module.exports = saveUser;
