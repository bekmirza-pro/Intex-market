const { Router } = require("express");

const router = new Router();

const register = require("../models/register/route");
const login = require("../models/login/route");
const home = require("../models/home/route");
const product = require("../models/products/route");
const consultation = require("../models/consultations/route");
const site = require('../models/site/route')
const orders = require("../models/orders/route");
const category = require("../models/category/route");

router.use("/auth", register);
router.use("/auth", login);
router.use("/api/home", home);
router.use("/api", product);
router.use("/api", consultation);
router.use("/api", site);
router.use("/api", category);
router.use("/api", orders);

module.exports = router;

