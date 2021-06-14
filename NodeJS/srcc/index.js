const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// lấy route từ folder routes chọc tới file index.js
const route = require("./routes"); // index.js viết cũng được hoặc không
const db = require("./config/db");
const { count } = require("./app/models/Course");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// dùng để thay đổi method GET, POST thành method khác
app.use(methodOverride("_method"))

// HTTP logger
app.use(morgan("combined"));

// Template angine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    // dùng để thay đổi {{@index}}
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views")); // o day nhan nhieu doi so

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
