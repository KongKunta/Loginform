const bcrypt = require('bcryptjs');

async function comparePassword(inputPassword, hashedPassword) {
    try {
      const match = await bcrypt.compare(inputPassword, hashedPassword);
      return match;
    } catch (error) {
      throw error;
    }
  }

module.exports = comparePassword;