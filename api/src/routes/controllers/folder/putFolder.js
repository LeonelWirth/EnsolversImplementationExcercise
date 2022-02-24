const { Folder } = require("../../../db");

const putFolder = async (req, res) => {
  const { folderId } = req.params;
  let newInfo = req.body;

  await Folder.update(newInfo, {
    where: {
      id: folderId,
    },
  }).catch((err) =>
    res.send({
      success: false,
      message: "Hubo un error al actualizar la carpeta",
    })
  );
  res.send({
    success: true,
    message: "La carpeta ha sido actualizada con éxito",
  });
};

module.exports = { putFolder };
