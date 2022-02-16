const { Router } =require("express");
const { addUser, listUsers, updateUser, deleteUser } =require("./userControllers");
const { hashPass } = require("../middleware");
const userRouter = Router();


    // hashPass is middleware (literally because in the middle)
    // we can add as much middleware as we want 
userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

// userRouter.post("/user", addUser);

module.exports = userRouter;