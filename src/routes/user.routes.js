// User Router => routes/user.routes.js
import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import validateUser from "../middlewares/validateUser.js"; // middleware to validate the user details

const userRouter = Router();

// routes -
userRouter.route("/users").get(getAllUsers);
userRouter.route("/users/:id").get(getUserById);
userRouter.route("/user").post(validateUser, createUser);
userRouter.route("/user/:id").put(validateUser, updateUser);
userRouter.route("/user/:id").delete(deleteUser);

export default userRouter;
