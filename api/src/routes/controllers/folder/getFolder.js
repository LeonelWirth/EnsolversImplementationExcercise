const { Folder } = require("../../../db");

const getFolder = async (req, res) => {
  let { userId } = req.params;
  let folders;
  try {
    folders = await Folder.findAll({ where: { userId } });
  } catch (error) {
    throw new Error("Error al encontrar a la carpeta");
  }
  res.send(folders);
};
module.exports = { getFolder };
