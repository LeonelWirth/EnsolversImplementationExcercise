const { Router } = require("express");
const router = Router();

const { postFolder } = require("./postFolder");
const { getFolder } = require("./getFolder");
const { putFolder } = require("./putFolder");
const { deleteFolder } = require("./deleteFolder");

router.post("/:userId", postFolder);
router.get("/:userId", getFolder);
router.put("/:folderId", putFolder);
router.delete("/:folderId", deleteFolder);

module.exports = router;
