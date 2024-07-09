const jwt = require("jsonwebtoken");
const envVariables = require("../../../config/config-env-variables");

const generateToken = (payload) => {
  const token = jwt.sign(payload, envVariables.jwt.secret, {
    expiresIn: envVariables.jwt.expiration
  });

  return token;
}

module.exports = generateToken;