const { User } = require("../../../db");

const postUser = async (req, res) => {
  const { username, password } = req.body;
  let newUser = await User.create({
    username,
    password,
  }).catch((err) => {
    res.json({ error: "No se puede crear el usuario correctamente" });
  });

  newUser = await newUser.save().catch((err) => {
    res.json({ error: "No se puede agregar el usuario correctamente" });
  });
  if (newTodo)
    res.json({
      message: "El usuario se ha agregado correctamente",
      user: newUser, // Devuelvo la data en la respuesta
    });
};

module.exports = { postUser };
