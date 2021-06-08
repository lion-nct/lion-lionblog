const newsRouter = require("./news");
const siteRouter = require("./site")

// tạo ra route làm gọn file srcc/index.js
function route(app) {
  // thuc chat
  // app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/search", newsRouter);

  app.post("/search", (req, res) => {
    res.send("");
  });
}

module.exports = route;
