import express from "express";
import { createUserAPI, deleteUserAPI, editUserAPI, getAllUsersAPI, getUserAPI } from "../user/user_controller.js";
import { routerUseMiddleware, missingNextMiddleware, modifyBody, printAMiddleware, printBMiddleware, specificPathMiddlware } from "./middleware.js";

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
appRouter.post("/create-user", createUserAPI); // uses req.body
appRouter.get("/get-all-users", getAllUsersAPI); 
appRouter.get("/get-user", getUserAPI); // Example for using params
appRouter.get('/filtered-users'); // Example for using query
appRouter.put("/edit-user", editUserAPI); 
appRouter.delete("/delete-user", deleteUserAPI);

// Middleware examples
// appRouter.use(routerUseMiddleware);
// appRouter.post("/create-user", modifyBody, createUserAPI); // Example with middleware
// appRouter.get("/two-middleware", printAMiddleware, printBMiddleware, getAllUsersAPI); // Example with multiple middlewares
// appRouter.get("/missing-next-middleware",  missingNextMiddleware, getAllUsersAPI); // Example with missing next in middleware

// Specific path/subdirectory only middlewares
appRouter.use('/specific', specificPathMiddlware);
appRouter.post("/specific/create-user", createUserAPI);
appRouter.get("/specific/get-all-users", getAllUsersAPI);

export default appRouter;