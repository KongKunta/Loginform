const User = require("../db/userSchema");
const { connect, disconnect } = require("../db/mongoose");

async function authMiddleware(req, res, next) {
  const ID = req.session.userId;
  connect();
  const userAuth = await User.findById(ID);
  if (userAuth.username === req.params.username) {
    next();
  } else {
    res.redirect("/login");
    return;
  }
}

module.exports = authMiddleware;