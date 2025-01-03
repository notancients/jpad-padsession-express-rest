import express from "express";
import { createUserAPI, getAllUsersAPI } from "../user/user_controller.js";

const appRouter = express.Router()

appRouter.get("/", (req, res) => {
    res.send({
        "message": "Welcome to the homepage!"
    })
})

// user
appRouter.post("/create-user", createUserAPI);
appRouter.get("/get-all-users", getAllUsersAPI);

export default appRouter;