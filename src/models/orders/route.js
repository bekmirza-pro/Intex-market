const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router
  .get("/orders", controller.GET)
  // .get("/orders/:id", AUTH_USER, controller.GET_ONE)
  // .post("/category", AUTH_USER, controller.POST)
  .put("/orders/:id", AUTH_USER, controller.UPDATE)
  .delete("/orders/:id", AUTH_USER, controller.DELETE);

module.exports = router;
