const { Router } = require("express");
const router = Router();

const todo = require("./controllers/todo/todo");
const folder = require("./controllers/folder/folder");
const user = require("./controllers/user/user");

router.use("/todo", todo);
router.use("/folder", folder);
router.use("/user", user);

module.exports = router;
