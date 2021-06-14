const newsRouter = require("./news");
const meRouter = require("./me");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

// tạo ra route làm gọn file srcc/index.js
function route(app) {
  // thuc chat
  // app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
  app.use("/search", newsRouter);
  app.use("/courses", coursesRouter);
}

module.exports = route;
