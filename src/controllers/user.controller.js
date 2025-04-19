const users = []; // global user object to stores users details.

export const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const foundUser = users.find((user) => Number(user.id) === Number(req.params.id));
  if (!foundUser) return res.status(404).json({ error: " User Not Found" });

  return res.status(200).json(foundUser);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  return res.status(201).json({ message: "User created", user: newUser });
};

export const updateUser = (req, res) => {
  const foundUserIndex = users.findIndex(
    (user) => Number(user.id) === Number(req.params.id)
  );

  if (foundUserIndex === -1)
    return res.status(404).json({ error: "User not found" });

  users[foundUserIndex] = { ...users[foundUserIndex], ...req.body };
  return res
    .status(200)
    .json({ message: "User updated", user: users[foundUserIndex] });
};

export const deleteUser = (req, res) => {
  const foundUserIndex = users.findIndex(
    (user) => Number(user.id) === Number(req.params.id)
  );
  if (foundUserIndex === -1)
    return res.status(404).json({ error: "User not found" });

  users.splice(foundUserIndex, 1);
  return res.status(204).json({ message: "User deleted" });
};
