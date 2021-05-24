var User = function (firstName, lastName, avatar) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.avatar = avatar);
};

var user = new User("Cong", "Thanh", "noavatar");
var user2 = new User("Kieu", "ngan", "noavatar");

console.log(user);
console.log(user2);

var cour2 = ["Java", "JavaScript", "PHP", "CSS", "ruby"];

var cour2Length = cour2.length;

for (var i = 0; i < cour2Length; i++) {
  console.log(i);
}

var cour = {
  thanh: "Java",
  cong: "JavaScript",
  kieu: "PHP",
  ngân: "CSS",
};

for (var key in cour) {
  console.log(cour[key]);
}

var allName = {
  thanh: "Java 1",
  cong: "JavaScript 2",
  kieu: "PHP 3",
  ngân: "CSS 4",
};
// Object.keys(tên biến) hoặc Object.values( tên biến)
for (var key of Object.keys(allName)) {
  console.log(allName[key]);
}

// reduce
var numbers = [100, 600, 500, 600, 740, 800];

var result = numbers.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(result);

var newPromise = new Promise(function (resolve, reject) {});

promise
  .then(function (result) {})
  .catch(function (err) {})
  .catch(function (error) {});

