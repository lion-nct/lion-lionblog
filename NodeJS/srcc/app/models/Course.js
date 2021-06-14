const mongoose = require("mongoose");

//import slug để trùng với path
const slug = require("mongoose-slug-generator");

const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true }, // required: true bat buoc phai nhap
    description: { type: String, maxLength: 600 }, // dinh nghia toi da ki tu
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },

    // slug sẽ lấy theo tên của name
    // unique: dùng để set có duy nhất 1 slug, không bao giờ bị trùng tên
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true, // mặc định tự tạo ra thời gian tạo hoặc update dữ liệu
  }
);

// ADD PLUGIN
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

//Models
module.exports = mongoose.model("Course", Course);
