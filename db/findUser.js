const mongoose = require('mongoose');
const User = require('./userSchema');

async function findUser(username) {
    try {
        const user = await User.findOne({ username: username});

        if (user) {
            console.log('Fundet bruger:', user);
            return user;
        } else {
            console.log('Bruger ikke fundet.');
            return null;
        }

        mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}

module.exports = findUser;
