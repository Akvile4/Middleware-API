const { Router } =require("express");
const { addUser, listUsers, updateUser, deleteUser, login } =require("./userControllers");
const { hashPass, emailValid } = require("../middleware");
const userRouter = Router();


    // hashPass is middleware (literally because in the middle)
    // we can add as much middleware as we want 
    // emailValid will check if the email has the right syntax
userRouter.post("/user", emailValid, hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.get("/login", login);

// userRouter.post("/user", emailValid, addUser);

module.exports = userRouter;