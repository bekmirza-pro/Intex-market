const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");

const router = new Router();

const controller = require("./controller");

router
  .get("/consultation/all",AUTH_USER,  controller.GET)
  .get("/consultation/:id", AUTH_USER, controller.GET_ONE)
  .put("/consultation/:id",AUTH_USER,  controller.UPDATE)
  .delete("/consultation/:id", AUTH_USER, controller.DELETE);

module.exports = router;
