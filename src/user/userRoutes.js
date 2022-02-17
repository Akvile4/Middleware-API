const { Router } =require("express");
const { addUser, listUsers, updateUser, deleteUser, login, findUser } =require("./userControllers");
const { hashPass, emailValid } = require("../middleware");
const userRouter = Router();


    // hashPass is middleware (literally because in the middle)
    // we can add as much middleware as we want 
    // emailValid will check if the email has the right syntax
    // adding new entry
userRouter.post("/user", emailValid, hashPass, addUser);
    // gets all user data
userRouter.get("/user", listUsers);
    // updates user or email
userRouter.put("/user", emailValid, updateUser);
    // deletes user
userRouter.delete("/user", deleteUser);
    // checks the password of the user 
userRouter.get("/login", login);

userRouter.get("/find", findUser);

// userRouter.post("/user", emailValid, addUser);

module.exports = userRouter;