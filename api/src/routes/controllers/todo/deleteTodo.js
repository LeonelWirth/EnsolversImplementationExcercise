const { Todo } = require("../../../db");

const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  const todoDeleted = await Todo.destroy({
    where: {
      id: todoId,
    },
  }).catch((err) => {
    throw new Error("Error al borrar la tarea");
  });
  if (todoDeleted) {
    res.json({
      message: "La tarea ha sido borrada correctamente",
    });
  } else {
    res.json({
      message: "La tarea no existe",
    });
  }
};
module.exports = { deleteTodo };
