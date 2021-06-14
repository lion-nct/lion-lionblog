const express = require("express");
const router = express.Router();

// import courseController
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions" , courseController.handleFormActions);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.destroy); //delete cũng đc
router.delete("/:id/force", courseController.forceDestroy);
router.get("/:slug", courseController.show);

module.exports = router;
