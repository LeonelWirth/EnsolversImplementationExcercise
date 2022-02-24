const { Folder } = require("../../../db");

const postFolder = async (req, res) => {
  const { foldername } = req.body;
  let userId = req.params;
  let newFolder = await Folder.create({
    foldername,
  }).catch((err) => {
    res.json({ error: "No se puede crear la carpeta correctamente" });
  });
  newFolder.setFolder(userId); // Vinculo al Folder
  newFolder = await newFolder.save().catch((err) => {
    res.json({ error: "No se puede agregar la carpeta correctamente" });
  });
  if (newFolder)
    res.json({
      message: "La carpeta se ha agregado correctamente",
      folder: newFolder, // Devuelvo la data en la respuesta
    });
};

module.exports = { postFolder };
