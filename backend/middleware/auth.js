// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config()

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token,'secret-hello-world');
    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Token is not valid' });
  }
};

module.exports = auth;
