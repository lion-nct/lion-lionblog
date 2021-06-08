const express = require("express");
const router = express.Router();

// import newsController
const siteController = require("../app/controllers/SiteController");


router.get("/search", siteController.search);
router.get("/", siteController.index);

module.exports = router;
