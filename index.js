import express from "express";
// import bodyParser from "body-parser";
// import { configDotenv } from "dotenv";
import appRouter from "./server/router.js";  

configDotenv();
const PORT = 3001;

const app = express();

// app.use(bodyParser.json())

// await setupSQLDatabase();

app.use(appRouter);

console.log(`Starting express server at port: ${PORT}`);
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})