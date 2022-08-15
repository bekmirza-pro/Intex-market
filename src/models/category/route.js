const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router
  .get("/category", controller.GET)
  .get("/category/:id", AUTH_USER, controller.GET_ONE)
  .post("/category", AUTH_USER, controller.POST)
  .put("/category/:id", AUTH_USER, controller.UPDATE)
  .delete("/category/:id", AUTH_USER, controller.DELETE);

module.exports = router;
