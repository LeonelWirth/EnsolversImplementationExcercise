const { User } = require("../../../db");

const getUser = async (req, res) => {
  let { username } = req.params;
  let user;
  try {
    user = await User.findAll({ where: { username } });
  } catch (error) {
    throw new Error("Error al encontrar a el usuario");
  }
  res.send(user);
};
module.exports = { getUser };
