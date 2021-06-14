const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");

class CourseController {
  // Tạo phương thức show
  //  [GET] / /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }) // đi tới đúng trang slug cần lấy
      .then((course) => {
        // render tới đúng file courses/show đã tạo
        // dùng phương thức mongooseToObject để hiển thị được và chọc đúng tới documents
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // Tạo phương thức create
  //  [GET] / /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //  [POST] / /courses/(create)store
  store(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      //redirect dùng để chuyển hướng
      // sau khi tải lên xong thì chuyển hướng về trang chủ
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => {});
  }
  // Tạo phương thức edit
  //  [GET] / /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //  [PUT] / /courses/:id
  // { _id: req.params.id } : là điều kiện(sửa đúng id cần sửa)
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //  [DELETE] / /courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //  [DELETE] / /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //  [PATCH] / /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //  [POST] / /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ message: "Action is invalid" });
    }
  }
}

module.exports = new CourseController();
