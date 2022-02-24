const { Folder } = require("../../../db");

const deleteFolder = async (req, res) => {
  const { folderId } = req.params;
  const folderDeleted = await Folder.destroy({
    where: {
      id: folderId,
    },
  }).catch((err) => {
    throw new Error("Error al borrar la carpeta");
  });
  if (folderDeleted) {
    res.json({
      message: "La carpeta ha sido borrada correctamente",
    });
  } else {
    res.json({
      message: "La carpeta no existe",
    });
  }
};
module.exports = { deleteFolder };
