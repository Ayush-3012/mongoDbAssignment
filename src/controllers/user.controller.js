// const users = []; // global user object to stores users details.
import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find(); // using User.find() to get all the users form db.
  return res.status(200).json(allUsers);
};

export const getUserById = async (req, res) => {
  const foundUser = await User.findById(req.params.id); // passing mongoose ObjectId in params
  console.log(foundUser);
  if (!foundUser) return res.status(404).json({ error: " User Not Found" });

  return res.status(200).json(foundUser);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser); // using User.create() to save the new users.
  return res.status(201).json({ message: "User created", user: newUser });
};

export const updateUser = async (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const foundUser = await User.findById(req.params.id); // passing mongoose ObjectId in params

  if (!foundUser) return res.status(404).json({ error: "User not found" });

  if (firstName) foundUser.firstName = firstName;
  if (lastName) foundUser.lastName = lastName;
  if (hobby) foundUser.hobby = hobby;

  const updatedUser = await foundUser.save();
  return res.status(200).json({ message: "User updated", updatedUser });
};

export const deleteUser = async (req, res) => {
  const foundUser = await User.findByIdAndDelete(req.params.id);
  if (!foundUser) return res.status(404).json({ error: "User not found" });

  return res.status(204).send();
};
