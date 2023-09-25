const mongoose = require('mongoose');
const User = require('./userSchema');

async function findUser(username) {
    try {
        const user = await User.findOne({ username: username});

        if (user) {
            console.log('Fundet bruger:', user);
        } else {
            console.log('Bruger ikke fundet.');
        }

        mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}

module.exports = findUser;
