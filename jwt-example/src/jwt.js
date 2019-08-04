const jwt = require("jsonwebtoken");
const config = require("./config.json");

function createJWT(payload) {
    return jwt.sign(payload, config.private_key);
}

function verifyJWT(token) {
    return jwt.verify(token, config.private_key);
}

module.exports = {
  createJWT,
  verifyJWT
};
