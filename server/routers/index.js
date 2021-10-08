const router = require("express").Router();
const gameRouter = require("./game");
const cartRouter = require("./cart");

router.use("/games", gameRouter);
router.use("/carts", cartRouter);

module.exports = router;
