module.exports = {
  // sử dụng khi có nhiều document giống nhau
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  // sử dụng trong trường hợp có 1 document (chi tiet 1 phan nao do)
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
