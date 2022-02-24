const { Todo } = require("../../../db");

const putTodo = async (req, res) => {
  const { todoId } = req.params;
  // const { date, initialTime, endingTime } = req.body; // MIGRAR A ARREGLO DE OBJETO
  let newInfo = req.body;

  await Todo.update(newInfo, {
    where: {
      id: todoId,
    },
  }).catch((err) =>
    res.send({
      success: false,
      message: "Hubo un error al actualizar la tarea",
    })
  );
  res.send({
    success: true,
    message: "La tarea ha sido actualizada con éxito",
  });
};

module.exports = { putTodo };
