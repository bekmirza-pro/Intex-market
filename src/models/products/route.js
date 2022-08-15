const { Router } = require("express");
const { AUTH_USER } = require("../../middlewares/auth");
const multer = require('multer')
const path = require('path')
const router = new Router();

const controller = require("./controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/upload/img/')
  },
  filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

const upload = multer({ storage: storage })

router
  .get("/product", controller.GET)
  .get("/product/:id", controller.GET_ONE)
  .post("/product", upload.single('picture_link'), controller.POST)
  .put("/product/:id", upload.single('picture_link'), controller.UPDATE)
  .delete("/product/:id", AUTH_USER, controller.DELETE);

module.exports = router;
