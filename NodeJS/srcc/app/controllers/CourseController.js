const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

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
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course.save()
    //redirect dùng để chuyển hướng 
    // sau khi tải lên xong thì chuyển hướng về trang chủ
    .then(() => res.redirect("/")) 
    .catch(error => {})
  }
}

module.exports = new CourseController();
