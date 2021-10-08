const router = require("express").Router();
const GameController = require("../controllers/GameController");

router.get("/", GameController.get);
router.post("/", GameController.post);
router.get("/:id", GameController.getByID);
router.put("/:id", GameController.put);
router.delete("/:id", GameController.delete);

module.exports = router;
