const express = require("express");
const router = express.Router();

// import courseController
const meController = require("../app/controllers/MeController");


// storedCourses: phương thức tự đặt tên tùy ý
router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);

module.exports = router;
