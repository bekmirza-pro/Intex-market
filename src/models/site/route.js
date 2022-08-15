const {Router} = require("express");

const router = new Router();
const controller = require("./controller");

router
    .put("/site/phone", controller.PUT_PHONE)
    .put("/site/address", controller.PUT_SITE_ADDRESS)
    .put("/site/time", controller.PUT_SITE_TIME)
    .put("/site/telegram", controller.PUT_SITE_TELEGRAM)
    .put("/site/instagram", controller.PUT_SITE_INSTAGRAM);

module.exports = router;