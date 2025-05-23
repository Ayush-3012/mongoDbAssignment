import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find(); // using User.find() to get all the users form db.
  return res.status(200).json(allUsers);
};

export const getUserById = async (req, res) => {
  const foundUser = await User.findById(req.params.id); // passing mongoose ObjectId in params
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
  const foundUser = await User.findByIdAndUpdate(
    req.params.id, // id
    {
      firstName,
      lastName,
      hobby,
    }, // updated fields
    { new: true }
  ); // passing mongoose ObjectId in params

  if (!foundUser) return res.status(404).json({ error: "User not found" });

  return res.status(200).json({ message: "User updated", foundUser });
};

export const deleteUser = async (req, res) => {
  const foundUser = await User.findByIdAndDelete(req.params.id); // using ObjectId to find the user and delete.
  if (!foundUser) return res.status(404).json({ error: "User not found" });

  return res.status(204).send();
};
