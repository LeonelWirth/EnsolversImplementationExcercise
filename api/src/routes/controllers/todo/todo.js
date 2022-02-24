const { Router } = require("express");
const router = Router();

const { postTodo } = require("./postTodo");
const { getTodo } = require("./getTodo");
const { putTodo } = require("./putTodo");
const { deleteTodo } = require("./deleteTodo");

router.post("/:folderId", postTodo);
router.get("/:folderId", getTodo);
router.put("/:todoId", putTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
