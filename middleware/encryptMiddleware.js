const bcrypt = require('bcryptjs');

function encryptPassword(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'Manglende adgangskode' });
  }

  const savedSalt = bcrypt.genSaltSync(10);

  bcrypt.hash(password, savedSalt, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: 'Kunne ikke kryptere adgangskoden' });
    }

    req.body.password = hash;
    next();
  });
}

module.exports = encryptPassword;
