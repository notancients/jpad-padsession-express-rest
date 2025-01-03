import express from "express";
import { createUserAPI, getAllUsersAPI } from "../user/user_controller.js";
import { modifyBody } from "./middleware.js";

const appRouter = express.Router()

appRouter.get("/", (req, res) => {
    res.send({
        "message": "Welcome to the homepage!"
    })
})

appRouter.get("/full-middleware", 
    (req, res, next) => {
        console.log("This is how they look without being separated as a function.");
    },
    (req, res) => {
        res.send("This is the response that the user would actually get when accessing this endpoint.");
    }
)

// user
appRouter.post("/create-user", createUserAPI);
// appRouter.post("/create-user", modifyBody, createUserAPI); // Example with middleware

appRouter.get("/get-all-users", getAllUsersAPI); // Example with multiple middlewares
appRouter.get("/get-all-users", getAllUsersAPI); // Example with missing next in middleware

appRouter.get("/get-all-users", getAllUsersAPI);

export default appRouter;