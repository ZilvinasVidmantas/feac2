const jwt = require("jsonwebtoken");
const envVariables = require("../config/config-env-variables");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ error: "Not authenticated" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, envVariables.jwt.secret);
    req.currentUser = payload;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authenticated" });
  }
};

module.exports = authMiddleware;