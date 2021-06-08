const express = require("express");
const router = express.Router();

// import newsController
const newsController = require("../app/controllers/NewsController");

// newsController.index

router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;
