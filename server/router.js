import express from "express";

const appRouter = express.Router()

appRouter.get("/", (req, res) => {
    res.send({
        "message": "Welcome to the homepage!"
    })
})

export default appRouter;