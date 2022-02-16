const { Router } =require("express");
const { addUser } =require("./userControllers");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);

// userRouter.post("/user", addUser);

module.exports = userRouter;