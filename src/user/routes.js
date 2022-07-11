const { Router } = require("express"); //import Router method only from express
const { signUp, login } = require("./controllers"); //import only signUp from controllers file
const { hashPass } = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /userpath, that calls the signUp controller
userRouter.post("/login", login); // defining a post request on /login path, that calls the login controller

module.exports = userRouter;
