const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router
  .get("/category", controller.GET_CATEGORY)
  .get("/product", controller.GET_PRODUCT)
  .get("/product/category/:categoryId", controller.GET_PRODUCT_FILTER)
  .get("/product/:productId", controller.GET_PRODUCT_ONE)
  .get("/site", controller.GET_SITE)
  .post("/order", controller.ORDER_POST)
  .post("/consultation", controller.CONSULTATION_POST);

module.exports = router;