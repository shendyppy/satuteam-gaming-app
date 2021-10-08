const router = require("express").Router();
const CartController = require("../controllers/CartController");

router.get("/", CartController.get);
router.post("/", CartController.post);
router.delete("/:id", CartController.delete);

module.exports = router;
