const { Todo } = require("../../../db");

const getTodo = async (req, res) => {
  // folderId por params
  let { folderId } = req.params;
  let todos;
  try {
    todos = await Todo.findAll({ where: { folderId } });
  } catch (error) {
    throw new Error("Error al encontrar a la tarea");
  }
  res.send(todos);
};
module.exports = { getTodo };
