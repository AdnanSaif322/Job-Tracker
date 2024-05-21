import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//Router
import jobRouter from "./routers/jobRouter.js";
import authRouter from "./routers/authRouter.js";

// Middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const app = express();

app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hi there mark");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorHandlerMiddleware);
// app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.use("*", (req, res) => {
  res.status(200).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something wrong with the server" });
});

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
