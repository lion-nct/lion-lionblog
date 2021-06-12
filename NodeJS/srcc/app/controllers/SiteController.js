const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //  [GET] /

  // Dùng Models chọc vào database lấy ra dữ liệu và render ra course
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //    next(err)
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });

    // Viết gọn theo kiểu Promise
    Course.find({})
      .then((courses) => {
        res.render("home", {
                // dùng phương thức mutipleMongooseToObject để hiển thị được và chọc đúng tới list 
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error)); // gon hon .catch(next)

    // res.render("home");
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
