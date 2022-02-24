const { Router } = require("express");
const router = Router();

const { postUser } = require("./postUser");
const { getUser } = require("./getUser");
const { putUser } = require("./putUser");
const { deleteUser } = require("./deleteUser");

router.post("/", postUser);
router.get("/:username", getUser);
router.put("/:userId", putUser);
router.delete("/:userId", deleteUser);

module.exports = router;
