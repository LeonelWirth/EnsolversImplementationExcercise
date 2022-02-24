const { Todo } = require("../../../db");

const postTodo = async (req, res) => {
  const { todo } = req.body;
  let folderId = req.params;
  let newTodo = await Todo.create({
    todo: todo,
  }).catch((err) => {
    res.json({ error: "No se puede crear el ToDo correctamente" });
  });
  newTodo.setFolder(folderId); // Vinculo al Folder
  newTodo = await newTodo.save().catch((err) => {
    res.json({ error: "No se puede agregar el ToDo correctamente" });
  });
  if (newTodo)
    res.json({
      message: "El ToDo se ha agregado correctamente",
      todo: newTodo, // Devuelvo la data en la respuesta
    });
};

module.exports = { postTodo };
