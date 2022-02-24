const { User } = require("../../../db");

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const userDeleted = await User.destroy({
    where: {
      id: userId,
    },
  }).catch((err) => {
    throw new Error("Error al borrar el usuario");
  });
  if (userDeleted) {
    res.json({
      message: "El usuario ha sido borrada correctamente",
    });
  } else {
    res.json({
      message: "El usuario no existe",
    });
  }
};
module.exports = { deleteUser };
