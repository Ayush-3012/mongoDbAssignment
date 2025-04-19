import express from "express";
import dotenv from "dotenv";
import logger from "./middlewares/logger.js";
import userRouter from "./routes/user.routes.js";
import connectDB from "./db/connect.js"; // database connection

dotenv.config();

const app = express();
const PORT = process.env.PORT; // PORT defined in env.

// app.get("/", (req, res) => res.json("Hello World"));

// middleware to parse JSON.
app.use(express.json());

// custom middleware
app.use(logger);

// user route.
app.use("/api/v1/users", userRouter);

// listening to defined PORT after starting the server.
app.listen(PORT, () => {
  connectDB(), console.log(`Server is listening on port: ${PORT}`);
});
