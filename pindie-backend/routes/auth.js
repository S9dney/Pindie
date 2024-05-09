const authRouter = require("express").Router();
const { login } = require("../controllers/auth.js");
const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");

authRouter.post("/auth/login", login);

module.exports = authRouter;
