const { User } = require("../../../db");

const putUser = async (req, res) => {
  const { userId } = req.params;
  let newInfo = req.body;

  await User.update(newInfo, {
    where: {
      id: userId,
    },
  }).catch((err) =>
    res.send({
      success: false,
      message: "Hubo un error al actualizar el usuario",
    })
  );
  res.send({
    success: true,
    message: "El usuario ha sido actualizada con éxito",
  });
};

module.exports = { putUser };
