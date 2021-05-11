var myArray = ["cong thanh", "kashiwa", "tria", "alo"];
console.log(myArray[1]);

var myObject = {
  name: "công thành",
  age: "22",
  adress: "kashiwa",
};
console.log("myObject", myObject);

var thanh1 = "js js js js js js";
console.log(thanh1.replace(/js/g, "Javascript"));

var thanh2 = "tôi tên là Nguyễn Công Thành";
console.log(thanh2.indexOf("Công Thành"));

var thanh3 = "tôi tên là Nguyễn Công Thành";
console.log(thanh3.slice(11));

var thanh4 = "tôi tên là Nguyễn Công Thành";
console.log(thanh4.toUpperCase());

var thanh5 = "tôi tên là Nguyễn Công Thành";
console.log(thanh5.toLowerCase());

var thanh6 = "     tôi tên là Nguyễn Công Thành     ";
console.log(thanh6.trim().length);

// LÀM VIÊC VỚI ARRAY
var thanh7 = ["hello", "how are you", "and you"];
console.log(thanh7.toString());

var thanh8 = ["hello", "how are you", "and you"];
console.log(thanh8.join(", "));

var thanh9 = ["hello", "how are you", "and you"];
console.log(thanh9.pop());
console.log(thanh9);
// xóa phần tử cuối mảng và trả về chính phần tử đã xóa

var thanh10 = ["hello", "how are you", "and you"];
console.log(thanh10.shift());
console.log(thanh10.shift());
console.log(thanh10);
// xóa đi giá trị ở đầu mảng

var thanh11 = ["hello", "how are you", "and you"];
console.log(thanh11.push("cong thanh", "tria"));
console.log(thanh11);
// thêm các phần tử ở cuối mảng và trả về giá trị mới

var thanh12 = ["hello", "how are you", "and you"];
console.log(thanh12.unshift("My name is:", "where are you?"));
console.log(thanh12);
// thêm vào giá trị ở đầu mảng

var thanh13 = ["hello", "how are you", "and you"];
thanh13.splice(1, 2);
// splice(vị trí đặt con trỏ để xóa, số lượng phần tử muốn xóa từ vị trí con trỏ, 'chèn element mới')
console.log(thanh13);

var thanh14 = ["nguyen", "cong", "thanh"];
console.log(thanh14.concat(thanh12));
// hợp nhất các element của các mảng lại với nhau

var thanh15 = ["hello", "how are you", "and you", "alo", "konnichiha"];
console.log(thanh15.slice(1, 4));
// cắt 1 hoặc nhiều element của mảng

function thanh16() {
  // alert('Xin chào các bạn');
}
thanh16();

function thanh17(message1, message2) {
  console.log(message1);
  console.log(message2);
}
thanh17("tôi tên là thành", "tôi ở kashiwa");

function thanh18() {
  console.log(arguments);
}
thanh18("thanh1", "thanh2");

function thanh19() {
  for (var vonglap of arguments) {
    console.log(vonglap);
  }
}
thanh19("lặp lần 1", "lặp lần 2", "lặp lần 3");

function thanh20() {
  var myString = "";
  for (var vonglapnoi of arguments) {
    myString += `${vonglapnoi} - `;
  }
  console.log(myString);
}
thanh20("lặp lần 1", "lặp lần 2", "lặp lần 3", "lặp lần 4", "lặp lần 5");

function phepcong(a, b) {
  return a + b;
}
var result = phepcong(2, 8);
console.log(result);
// return sẽ trả về giá trị của phép toán hoặc biến bên phải nó
// những dòng code sau return sẽ không được thực thi
// return có thể trả về bất cứ kiểu dữ liệu gì ( toString, array .....)

function thanh21() {
  console.log("tôi tên là");
}
function thanh21() {
  console.log("tôi tên là công thành");
}
thanh21();

// KIỂU OBJECT
var emailKey = "email";
var myInfo = {
  name: "Công Thành",
  age: 22,
  address: "Kashiwa,Chiba",
  phone: "08065826078",
  [emailKey]: "thanhlion1998@gmail.com",
  getName: function () {
    return this.name; //this là tên của myInfo
  },
  getAge: function () {},
};
delete myInfo.age;
console.log(myInfo);
console.log(myInfo.getName()); //gọi function phải có dấu gọi --> ()

// OBJECT PROPERTY
// 1 cách viết khác: var User = function(firstName, lastName,avatar){}
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`; // this ở đây là gọi từ method --> getName
  };
}

//Prototype
// User.prototype.className = 'lionblog';
// console.log(author.className);

// ví dụ VIẾT NHỮNG THUỘC TÍNH CHUNG
var author = new User("Công", "Thành", "avatar");
var user = new User("Kiều", "Ngân", "avatar1");

// ví dụ thêm thuộc tính riêng cho từng biến
author.title = "tôi tên là Nguyễn Công Thành";
user.comment = "tôi biết rồi :)))";

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

//ĐỐI TƯỢNG DATE
var date = new Date();

var year = date.getYear();
var month = date.getMonth() + 1; // cộng 1 vì mặc định từ tháng 0 - 11
var day = date.getDate();

console.log(date);
console.log(`${day}/${month}/${year}`);

//CẤU TRÚC RẼ NHÁNH IF ELSE
var date = 2;
if (date === 8) {
  console.log("hôm nay là thứ hai");
} else if (date === 5) {
  console.log("hôm nay là thứ ba");
} else if (date === 8) {
  console.log("hôm nay là thứ hai");
} else {
  console.log("hôm nay là bảy");
}

// CÂU LỆNH RẼ NHÁNH SWITCH
// luôn viết default cuối cùng và không cần break vì đằng sau không còn case  nào
// sử dụng switch khi có từ 3 case trở lên hoặc biết trước giá trị để code đỡ rối và tối ưu
// dưới 3 case thì dùng if else

var date = 3;
switch (date) {
  case 1:
  case 2:
    console.log("case chung số 1 và 2");
    break;
  case 3:
    console.log("case số 3");
  case 4:
    console.log("case số 4");
    break;
  case 5:
    console.log("case số 5");
    break;
  // nếu không có break thì nó sẽ hiển thị default
  default:
    console.log("không tìm thấy giá trị đúng");
}

//TOÁN TỬ BA NGÔI ternary operetor

var course = {
  name: "Javascript",
  coin: 250,
};
// if(course.coin > 0) {
//     console.log(`${course.coin} Coins `)
// }else{
//     console.log('Miễn phí')
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "Miễn phí";
console.log(result);

// VÒNG LẶP FOR

for (var i = 1; i <= 3; i++) {
  console.log("i =", i);
}

var myArray = ["Javascript", "Python", "HTML", "CSS", "Java"];

var arrayLength = myArray.length;
// khuyến khích viết ở ngoài để tối ưu

for (var i = 0; i < arrayLength; i++) {
  console.log("Ngôn ngữ", myArray[i]);
}

// FOR/IN : dùng để lấy ra các key của đối tượng

var myInfo = {
  name: "Công Thành",
  age: 23,
  address: "Kashiwa, Chiba",
};
for (var thanh22 in myInfo) {
  console.log(myInfo[thanh22]);
}

// FOR OF : dùng để lấy ra các value của đối tượng

var language = ["Javascript", "PHP", "Ruby"];
for (var thanh23 of language) {
  console.log(thanh23);
}
// cách lấy ra key của một object
var myInfo = {
  name: "Công Thành",
  age: 23,
  address: "Kashiwa, Chiba, Japan",
};
console.log(Object.keys(myInfo));

// WHILE
var myInfo = ["Công Thành", "23 tuổi"];
var i = 0;
var result = myInfo.length;
while (i < result) {
  console.log(myInfo[i]);
  i++;
}

// DO/WHILE
// vòng lặp do luôn chạy 1 lần dù điều kiện đúng hay sai

var i = 0;
var napthe = false;
do {
  i++;
  console.log("Nạp thẻ lần số " + i);

  if (true) {
    napthe = true;
  }
} while (!napthe && i < 3);

// BREAK & CONTINUE

for (var i = 0; i <= 10; i++) {
  console.log(i);

  if (i >= 4) {
    break;
  }
}

for (var i = 10; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// VÒNG LẶP LỒNG NHAU (nested loop)

var myArray = [
  [100, 200],
  [300, 400],
  [500, 600],
];

for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}

// MẢNG ARRAY MỞ RỘNG

var myArray = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "PHP",
    coin: 0,
  },
  {
    id: 3,
    name: "HTML",
    coin: 0,
  },
  {
    id: 4,
    name: "Ruby",
    coin: 400,
  },
  {
    id: 4.5,
    name: "Ruby",
    coin: 300,
  },
  {
    id: 5,
    name: "CSS",
    coin: 500,
  },
  {
    id: 6,
    name: "Javascript",
    coin: 300,
  },
];

// forEach: trả về tất cả các Element trong Array
myArray.forEach(function (thanh24, index) {
  console.log(index, thanh24);
});


// every: dùng để kiểm tra tất cả điều kiện trong mảng và phải thỏa mãn 1 điều kiện gì đó
// every sẽ kiểm tra từng điều kiện nếu điều kiện sai sẽ không chạy
// và không ktra điều kiện tiếp theo mà in ra luôn
var every = myArray.every(function (thanh25, stt) {
  console.log(stt); // sai tại vị trí đầu tiên nên dừng và in ra luôn
  return thanh25.coin === 0;
});
console.log(every);

// some nguyên tắc hoạt động giống every
// some: chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện thì dừng vòng lặp và trả kq luôn
var some = myArray.some(function (thanh26, stt) {
  // console.log(stt);
  return thanh26.name === "PHP";
});
console.log(some);

// find: chỉ trả về MỘT phần tử ĐÚNG đầu tiên
var course = myArray.find(function (thanh27, stt) {
  return thanh27.name === "Ruby";
});
console.log(course);

// filter: sẽ trả về hết TẤT CẢ phần tử đúng
var filter = myArray.filter(function (thanh28, stt) {
  return thanh28.name === "Ruby";
});
console.log(filter);

var course = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "PHP",
    coin: 0,
  },
  {
    id: 3,
    name: "HTML",
    coin: 0,
  },
  {
    id: 4,
    name: "Ruby",
    coin: 400,
  },
  {
    id: 4.5,
    name: "Ruby",
    coin: 300,
  },
  {
    id: 5,
    name: "CSS",
    coin: 500,
  },
  {
    id: 6,
    name: "Javascript",
    coin: 300,
  },
];


// MAP : dùng để chỉnh sửa hoặc thay đổi các element của một array
// đối với map: nếu viết gì trong return thì sẽ in ra cái đó
var newCourses = course.map(function (thanh29) {
  return {
    id: thanh29.id,
    name: `Khóa học: ${thanh29.name}`,
    coin: `Giá: ${thanh29.coin} Coin`,
  };
});
console.log(newCourses);

// REDUCED : dùng khi muốn nhận về một giá trị duy nhất (vd: nhận về tổng số coin như bên dưới)
// reduce sẽ nhận 2 đối số truyển vào(function, giá trị khởi tạo) 
// trong function truyền vào 4 tham số (bienluutru,giatrihientai,chimuccuagiatrihientai, array gốc)
// accumulator sẽ được gán = với giá trị khởi tạo trong lần chạy đầu tiên

var i = 0;

function thanh30(accumulator, currentValue, currentIndex, originArray) {
  i++;

  var thanh31 = accumulator + currentValue.coin;

  console.table({
    "Lượt chạy: ": i,
    "Biến lưu trữ: ": accumulator,
    " Giá khóa học: ": currentValue.coin,
    " Tích trữ được:": thanh31,
  });
  console.log(currentValue);
  // return cái gì thì in ra cái đó
  return thanh31;
}
var thanh32 = course.reduce(thanh30, 0);
// thanh30 là 1 function nhưng viết cách khác
// giá trị khởi tạo 0(number) sẽ được gán cho accumulator(bienluutru) và có giá trị đó luôn, trong lần chạy đầu tiên
// giá trị khởi tạo có thể là bất cứ kiểu dữ liệu gì ví dụ : array,.... 
console.log("Tổng số coin của khóa học: ", thanh32);

// Flat (làm phẳng mảng) từ Depth array (mảng sâu)
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10];

var flatArray = depthArray.reduce(function (a, b) {
  return a.concat(b);
  // a là giá trị khởi tạo chính là mảng mới rỗng
  // b là giá trị của mảng cho trước depthArray
}, []); // khởi tạo gì thì viết giá trị đấy (ví dụ ở đây đang khởi tạo mảng rỗng [])
console.log(flatArray);

var thanh33 = [
  {
    topic: "Font-end",
    courses: [
      {
        id: 1,
        title: "HTML-CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "Ruby",
      },
    ],
  },
];

var newArray = thanh33.reduce(function (a, b) {
  return a.concat(b.courses);
}, []);
console.log(newArray);

// INCLUDES : phương thức tồn tại có sẵn trong String và Array
var thanh34 = "tôi tên là Nguyễn Công Thành";
console.log(thanh34.includes("tên", 1));
// truyền vào 2 giá trị include('từ khóa tìm kiếm', vị trí bắt đầu tìm kiếm)
 
var thanh35 = ["Tên", "Nguyễn", "Công", "Thành"];
console.log(thanh35.includes("Nguyễn", 3));

//MATH ONBJECT

console.log(Math.PI);
console.log(Math.round(1.8)); // làm tròn số
console.log(Math.abs(-9)); // giá trị tuyệt đối
console.log(Math.ceil(4.000001)); // làm tròn trên
console.log(Math.floor(10.1)); // làm tròn dưới
console.log(Math.min(-100, 50, 56, 85, 6, 8));
console.log(Math.max(-100, 50, 56, 85, 6, 8));

var random = Math.floor(Math.random() * 10); // tạo ra số, tên ngẫu nhiên
var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];
console.log(bonus[random]);

var random1 = Math.ceil(Math.random() * 100); // kết hợp với Math.ceil hoặc Math.floor để làm tròn số
if (random1 < 10) {
  console.log("Cường hóa đồ thành công!");
} else {
  console.log("Cường hóa thất bại!");
}

// CALLBACK
function myFunction(thanh36) {
  console.log(thanh36);
}
myFunction("Nguyễn Công Thành"); // truyền vào đối tượng gì thì in ra kiểu đó number,array,...

function myFunction(thanh37) {
  if (typeof thanh37 === "function") {
    // phải ktra là function thì mới thực thi
    thanh37("Học lập trình");
  }
}
function myCallback(value) {
  console.log("Value: ", value);
}
myFunction(myCallback);

// tự tạo ra 1 function mới theo ý
Array.prototype.map2 = function (callback) {
  // có trường hợp phải check callback có phải là function hay không
  var output = [];
  var arrayLength = this.length; // this ở đây chính là mảng language
  for (var i = 0; i < arrayLength; ++i) {
    // bắt buộc gọi lại function và phải truyền tham số vào nếu không sẽ trả về underfined
    var result = callback(this[i], i); //this[i] là mảng language và chính là course ở map2,
    // i là chỉ mục chạy ở vòng for và chính là index ở map2
    output.push(result);
  }
  return output;
};
var language = ["Javascript", "HTML", "CSS", "Ruby"];
var htmls = language.map2(function (course, index) {
  // truyền vào function ở đây để gọi function callback ở trên
  //console.log(index, course)
  return `<h2>${course}</h2>`; // return ở đây sẽ trả kết quả ở result
});
console.log(htmls.join("\n"));

// dùng function map có sẵn
var htmls2 = language.map(function (course2, index) {
  return `<h2>${course2}</h2>`;
});
console.log(htmls2.join("\n"));

// PHẦN TỪ GIẢ CỦA ARRAY
var course = new Array(10); // truyền vào 1 giá trị thì là độ dài của mảng
course.push("Công", "Thành");
console.log(course);
// var course = new Array(10,15); truyền vào 2 giá trị trở lên thì là element của mảng

var course = ["Javascript", "PHP", "Python", "Ruby"];
course.length = 10;
// lặp tất cả các phần tử thật và giả
for (var i = 0; i < course.length; i++) {
  console.log(course[i]);
}

// chỉ lặp các phần từ thật có trong array
for (var phantuthat in course) {
  if (this.hasOwnProperty(phantuthat)) {
    // không lọc và in ra các element trong prototype
    console.log(course[phantuthat]);
  }
}

// forEach, find, filter, some, every
Array.prototype.forEach2 = function (callback) {
  for (var thanh38 in this) {
    // for in sẽ duyệt qua tất cả element ở mảng và element trong prototype luôn
    if (this.hasOwnProperty(thanh38)) {
      callback(this[thanh38], thanh38, this);
    }
  }
};

var language = ["English", "Japan", "VietNam", "China"];
// tạo 1 forEach mới
language.forEach2(function (value, index, array) {
  console.log(index, value, array);
});

language.forEach(function (value, index, array) {
  console.log(index, value, array);
});

// FILTER
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var thanh39 in this) {
    if (this.hasOwnProperty(thanh39)) {
      var result = callback(this[thanh39], thanh39, this);
      if (result) {
        output.push(this[thanh39]);
      }
    }
  }
  return output;
};

var language = [
  {
    name: "Javascript",
    coin: 680,
  },
  {
    name: "PHP",
    coin: 860,
  },
  {
    name: "Ruby",
    coin: 980,
  },
];

// tự tạo 1 filter mới
var filter2Coin = language.filter2(function (value, index, array) {
  return value.coin > 700;
});
console.log(filter2Coin);

// filter có sẵn
var filterCoin = language.filter(function (value, index, array) {
  return value.coin > 700;
});
console.log(filterCoin);

//SOME
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        // nêú kết quả mà thỏa mãn thì return ra true luôn
        return true;
      }
    }
  }
  return false; // còn nếu tất cả không thỏa mãn thì return false ở đây
};
var language = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];
// tự tạo some mới
var result2 = language.some2(function (value, index, array) {
  return value.isFinish === true;
});
console.log(result2);

//some có sẵn
var result = language.some(function (value, index, array) {
  return value.isFinish === true;
});
console.log(result);

// EVERY (ngược với SOME)
Array.prototype.every2 = function (callback) {
  var output = true;

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

var language = [
  {
    name: "Javascript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];
var result2 = language.every2(function (value, index, array) {
  return value.isFinish;
});
console.log(result2);

var result = language.every(function (value, index, array) {
  return value.isFinish; // viết thêm  === true cũng đc, không viết thì mặc định là true
});
console.log(result);

// GET ELEMENT
document.getElementById("tên ID");
document.getElementsByClassName("tên Class"); // trả về 1 mảng nhiều đối tượng bên trong, select qua tên class
document.getElementsByTagName("tên thẻ"); // trả về 1 mảng nhiều đối tượng bên trong, select qua tên thẻ
document.querySelector(".thẻ cha .thẻcầnlấy "); //chỉ lấy ra 1 element
document.querySelectorAll(".thẻcầnlấy"); // lấy ra tất cả các element

// DOM ATTRIBUTE
var headingElement = document.querySelector("h1");
var headingElement2 = document.querySelector("h2");

headingElement2.title = "thanh39";
headingElement.setAttribute("href", "thanh40"); //đối số thứ 1 tên Attribut muốn set, thứ 2 giá trị Attribute muốn set
headingElement.setAttribute("data", "thanh41"); // tự set Attribute vào Element
document.querySelector("h1").title = "Học lập trình tại F8"; // môt cách viết nhanh khác

console.log(headingElement.getAttribute("data")); // lấy Attribute tự set
console.log(headingElement2.title); // lấy Attribute hợp lí đc set sẵn

var headingElement3 = document.querySelector("h3");
headingElement3.className = "headingh3";

// innerText : là thuộc tính của Element Node
var headingElement = document.querySelector(".heading");
headingElement.innerText = "Nội dung tên đã được sửa";
console.log(headingElement);

// textContent: lấy nguyên bản những Text Node có trong Element Node

// innerHTML : có thể thêm Element node, Attribute node, Text node vào Element
var boxElement = document.querySelector(".classheading");
boxElement.innerHTML = '<h1 title = "heading">Công Thành</h1>'; // thêm vào trong thẻ div .classheading và thay thế các thẻ có sẵn
console.log(boxElement.innerHTML);

var boxElement2 = document.querySelector(".classheading2");
boxElement2.outerHTML = '<h1 title = "heading">Tôi tên là Thành </h1>'; // thay thế ngay tại thẻ div.classheading2

// DOM CSS
var boxElement3 = document.querySelector(".thanh1");
var boxElement4 = document.querySelector(".thanh2");

// cách viết 1
boxElement3.style.width = "100px";
boxElement3.style.height = "50px";
boxElement3.style.backgroundColor = "green";

// cách viết 2 gọn hơn
//assign nhận nhiều đối số. Đối số thứ 1 truyền Object. Đối số thứ 2 Object muốn được hợp nhấtcho Object thứ 1
Object.assign(boxElement4.style, {
  width: "100px",
  height: "50px",
  backgroundColor: "red",
});

//ClassList (add,contains,remove,toggle)
var boxElement5 = document.querySelector(".thanh3");
var boxElement6 = document.querySelector(".thanh5");
var boxElement7 = document.querySelector(".thanh6");

boxElement5.classList.add("red", "blue"); // add 1 hoặc nhiều class mới vào

console.log(boxElement5.classList.contains("black"));
console.log(boxElement5.classList.contains("white"));

setTimeout(() => {
  boxElement5.classList.remove("blue");
}, 4000);
setTimeout(() => {
  boxElement6.classList.remove("green");
}, 3000);

// toggle nếu có class thì nó sẽ bỏ đi, nếu không có class đó thì nó sẽ thêm vào
setInterval(() => {
  boxElement7.classList.toggle("pink");
}, 500);

// một vài thuộc tính khac cho classList
console.log(boxElement5.classList[1]);
console.log(boxElement5.classList.length);
console.log(boxElement5.classList.value); // trả về string (tất cả gì có trong class kể cả dấu cách)

// DOM event
// 1. Attribute event (thường ít sử dụng vì viết inline nên phức tạp)

// Assign event using the element node
var boxElement8 = document.querySelector(".thanh7");
boxElement8.onclick = function (e) {
  // e viết tắt của event
  console.log(e.target);
};

var boxElement9 = document.querySelectorAll("h2"); // nếu đặt h2 thì tất cả elenment h2 trên trang web đều bị add thuộc tínhtính, hoặc có thể đặt theo từng class riêng
// boxElement9 là nodelist giống array nên dùng vòng lặp for
for (var i = 0; i < boxElement9.length; ++i) {
  boxElement9[i].onclick = function (e) {
    console.log(e.target); // target trả về chính element mình clck
  };
}

// Input/Select
var inputValue;

var inputElement = document.querySelector('input[type="text1"] ');
var inputElement2 = document.querySelector('input[type="text2"] ');
var inputElement3 = document.querySelector('input[type="checkbox"] ');
var inputElement4 = document.querySelector("select");
var inputElement5 = document.querySelector('input[type="text3"] ');
// onchange in ra khi gõ xong và click ra ngoài input
inputElement.onchange = function (e) {
  console.log(e.target.value);
};
// oninput gõ đến đâu in ra đến đấy
inputElement2.oninput = function (e) {
  console.log(e.target.value);

  // lưu dữ liệu input vào biến
  inputValue = e.target.value;
};

inputElement3.onchange = function (e) {
  console.log(e.target.checked); //checkbox thì dùng checked sẽ trả về check = true && không check = false
};

inputElement4.onchange = function (e) {
  console.log(e.target.value);
};

// chỉ which ở thẻ input
inputElement5.onkeyup = function (e) {
  console.log(e.which);
  switch (e.which) {
    case 27: // là vị trí nút ESC đc which ra
      console.log("Exit tại input");
      break;
  }
};
// which tất cả document
document.onkeydown = function (e) {
  switch (e.which) {
    case 27:
      console.log("Exit tại document");
      break;
    case 13:
      console.log("Send Chat");
      break;
  }
};

// preventDefault: loại bỏ một hành vi mặc định của trình duyệt trên một thẻ HTML

// 3 cách đều
var aElement = document.links; // lấy tất cả các thẻ a
// var aElement = document.anchors; // lấy ra các thẻ a có name
// var aElement = document.querySelector('a')
for (var i = 0; i < aElement.length; ++i) {
  aElement[i].onclick = function (e) {
    //khi ! & href http://127.0.0.1:2/HTML/lionblog.html thì cho chuyển trang và ngược lại
    if (!e.target.href.startsWith("http://127.0.0.1:2/HTML/lionblog.html")) {
      e.preventDefault();
    }
  };
}

var ulElement = document.querySelector(".thanh8-ul");
// sẽ click chuột xuống đc vào các phần tử khi focus input mà không mất
ulElement.onmousedown = function (e) {
  e.preventDefault();
};
ulElement.onclick = function (e) {
  console.log(e.target);
};

// stopPropagation: loại bỏ 1 sự kiện nổi bọt
document.querySelector(".thanh9").onclick = function (e) {
  console.log("DIV");
};
document.querySelector(".thanh10").onclick = function (e) {
  e.stopPropagation(); // click thẻ button sẽ không in luôn cả thẻ cha bên ngoài nữa
  console.log("Click Me!");
};

//DOM Event: sử dụng khi cHỈ có nhu cầu lắng nghe
var domElement = document.querySelector(".thanh11");

// phần add lắng nghe - và chỉ thực hiện đc 3s đầu
domElement.onclick = function () {
  console.log("lần 1");
  console.log("lần 2");
  alert("lần 3");
};
//hủy bỏ lắng nghe - sau 3s
setTimeout(function () {
  domElement.onclick = function () {}; // ghi đè lên phần code trên bằng cách truyền vào 1 function trống
}, 3000);

// EventListener: sử dụng khi có nhu cầu HỦY BỎ 1 sự kiện nào đó
var domElement2 = document.querySelector(".thanh12");

// addEventListener nhận 2 đối số (đối số 1: eventname loại bỏ chữ <on>, đối số 2: truyền 1 Function(callback))
// domElement2.addEventListener('click', function(e) {

// })

function viec1() {
  console.log("viec1-a");
  console.log("viec1-b");
}
function viec2() {
  console.log("viec2-c");
  console.log("viec2-d");
}

domElement2.addEventListener("click", viec1);
domElement2.addEventListener("click", viec2);

setTimeout(function () {
  domElement2.removeEventListener("click", viec1);
}, 3000);

// JSON: 'Number, Boolean, Null, String, Array, Object'

// Parse: Từ JSON --> Javascript type
// cách tạo 1 json
var json = '{"name": "Công Thành", "age": 13}';
console.log(JSON.parse(json));

var a = '"Đây là kiểu String"';
var b = "true";
console.log(JSON.parse(a));
console.log(typeof JSON.parse(a));
console.log(typeof JSON.parse(b));

// Stringify: Từ Javascript type --> JSON
// truyền Number, Boolean, Null, String, Array, Object vào
console.log(JSON.stringify(["Javascript", "PHP", "Java"]));

// Callback hell
setTimeout(function () {
  console.log("lần 1");
  setTimeout(function () {
    console.log("lần 2");
    setTimeout(function () {
      console.log("lần 3");
      setTimeout(function () {
        console.log("lần 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Promise: để giải quyểt Callback hell
// Promise sẽ truyền vào <Executor> function(resolve, reject){}

var promise = new Promise(function (resolve, reject) {
  resolve([
    {
      id: 1,
      name: "giá trị nhận được và resolve ra",
    },
  ]);
  // thường sẽ chỉ reject mã lỗi hoặc thông báo lỗi
  // Fake call API
  reject("Đã xảy ra lỗi");
});

promise
  .then(function (thanh) {
    console.log(thanh);
    console.log("Thành công!");
  })
  .catch(function (error) {
    console.log(error);
    console.log("Thất bại!");
  })
  .finally(function () {
    // luôn trả về dù đúng hay sai
    console.log("Done!");
  });

var promise2 = new Promise(function (resolve, reject) {
  resolve();
});

promise2
  .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 500);
    });
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data2) {
    console.log(data2);
    return 3;
  })
  .then(function (data3) {
    console.log(data3);
  })

  .catch(function (error) {
    console.log(error);
    console.log("Thất bại!");
  })
  .finally(function () {
    // luôn trả về dù đúng hay sai
    console.log("Done!");
  });

// cách viết khác của callback hell
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
sleep(4000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(3000);
  })
  .then(function () {
    console.log(3);
  });

// cách tạo 1 promise hoàn toàn thành công hoặc thất bại
var promise = Promise.resolve("Thành công");
promise
  .then(function (result) {
    console.log("result: ", result);
  })
  .catch(function (error) {
    // sẽ không bao giờ chạy vào đây
    console.log("error: ", error);
  });

// Promise all
var promises1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([1]);
  }, 1000);
});
var promises2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 3000);
});

Promise.all([promises1, promises2]).then(function ([result1, result2]) {
  console.log(result1.concat(result2));
});

// VÍ DỤ THÊM VỀ PROMISE
// Yêu cầu hiểu và nắm chắc các kiến thức (Array,Function,Callback,Promise,DOM)
var users = [
  {
    id: 1,
    name: "Công Thành",
  },
  {
    id: 2,
    name: "Kiều Ngân",
  },
  {
    id: 3,
    name: "Công Chúa",
  },
  //....
];

var comment = [
  {
    id: 1,
    user_id: 1,
    content: "Anh yêu em nhiều lắm!",
  },
  {
    id: 2,
    user_id: 2,
    content: "Me too",
  },
  {
    id: 2,
    user_id: 1,
    content: "ahihi",
  },
];

function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comment);
    }, 1000);
  });
}

function getUserByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });

    // Promise hell
    return getUserByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

// Fetch/ API Server (Fake)
var postApi = "http://localhost:3000/courses";

fetch(postApi)
  .then(function (response) {
    // trả về dữ liệu tại response, chính response là 1 Promise
    return response.json(); // sẽ trả về 1 Promise và parse luôn => nhận đc kiểu Javascript tại đây
  })
  // trả về 1 Promise nên =>
  .then(function (posts) {
    console.log(posts);
  });

// thực hành

var courseApi = "http://localhost:3000/courses";

function start() {
  // cách viết tối ưu => getCourses(renderCourse)
  getCourses(function (courses) {
    renderCourse(courses);
  });

  handleCreateForm();
}

start();

// hàm
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      getCourses(renderCourse); //xóa và render lại code luôn nhưng gọi lại API

      // cách xóa không cần gọi lại API
      // var courseItem = document.querySelector(".course-item-" + id)
      // if (courseItem) {
      //   courseItem.remove(); // xóa khỏi DOM không cần gọi lại API
      // }
    });
}

function renderCourse(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
      <li class="course-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
      </li>
      `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var name = document.querySelector("input[name='name']").value;
    var description = document.querySelector("input[name='description']").value;

    var formData = {
      name: name,
      description: description,
    };

    createCourse(formData, function () {
      getCourses(renderCourse);
    });
  };
}

// Var / Let/ Const

// code thuần thì dùng var
// bable: const, let
// - định nghĩa biến và không gán lại thì dùng const
// - khi cần gán lại thì dùng let

// let và const có phạm vi lấy nhỏ hơn var và không hỗ trợ hosting
// let và const vẫn lấy đc trong block cha {}
// { let || const thanh = 'không lấy được'}
// console.log(thanh)

// riêng const không thể sừ dụng toán tử gán lại lần thứ 2 (thuộc tính thì được)
const thanh = {
  name: "Javascript",
};
thanh.name = "PHP";
console.log(thanh.name); // vẫn có thể gọi ra được

// Template ``

var template1 = "giá trị số 1";
var template2 = "giá trị số 2";
var template3 = `giá trị được nối dòng1: ${template1}
 đây là dòng 2: ${template2} `; // khi xuống dòng trong template sẽ in ra đúng như vậy
console.log(template3);

// Declaration Function
function logger(log) {
  console.log(log);
}
logger("đây là Declaration function");

//  Expression function
const logger1 = function (log) {
  console.log(log);
};
logger1("đây là Expression function");

// Arrow function
const logger2 = (log) => {
  console.log(log);
};
logger2("đây là Arrow function");

// Class constructor

// constructor function
function Course(name, price) {
  this.name = name;
  this.price = price;
}
const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("Javascript", 1000);

console.log(phpCourse);
console.log(jsCourse);

// Class constructor : dùng sẽ gọn hơn
class Course1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  run() {}
}

const phpCourse1 = new Course1("PHP", 1000);
const jsCourse1 = new Course1("Javascript", 1000);

console.log(phpCourse1);
console.log(jsCourse1);

// Destructuring
var array = ["Javascript", "PHP", "Ruby", "Python"];

// cách viết thông thường
a = array[0];
b = array[1];
c = array[2];
console.log(a, b, c);

// cách viết ngắn gọn
var [a, , c, d] = array;
console.log(a, c);

// cách lấy những value còn lại
var [a, ...rest] = array;
console.log(rest);

// tương tự với object
var object = {
  name: "Nguyễn Công Thành",
  age: "23 tuổi",
  year: 1998,
  address: "Kashiwa, Chiba",
  children: {
    name: "PHP",
    price: 1000,
  },
};
var { name, age, ...rest } = object;
console.log(age);
console.log(rest);

var object2 = {
  name: "Nguyễn Công Thành",
  age: "23 tuổi",
  year: 1998,
  address: "Kashiwa, Chiba",
  children: {
    name: "PHP",
    price: 1000,
  },
};
// cách đổi tên khi bị trùng key
var {
  name: parentName,
  newKey = "có thể thêm key mới thẳng vào trong này, nếu key được khai báo ở trên sẽ in ra key có giá trị ở trên",
  children: { name },
} = object2;
console.log(parentName);
console.log(name);
console.log(newKey);

function logger(a, ...params) {
  // tham số truyền vào đây sẽ trở thành mảng
  console.log(a);
  console.log(params);
}
logger(1, 2, 3, 4, 5, 6, 7, 8);

// nối mảng nhanh không dùng concat()

var array1 = ["phần tử 1", "phần tử 2", "phần tử 3"];
var array2 = ["phần tử 4", "phần tử 5"];

var array3 = [...array2, ...array1];
console.log(array3);

// tương tự với object
var object1 = {
  name: "Nguyễn Công Thành",
};

var object2 = {
  age: 23,
};

var object3 = {
  ...object1,
  ...object2,
  // tạo thêm key và value luôn vãn được
  year: 1998,
};
console.log(object3);

// Spread
var array = ["Javascript", "PHP", "Python", "HTML"];

function thanh42(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
thanh42(...array);

// Tagger template literals

var brand = "F8";
var course = "Javascript";
var price = 1600;

function highlight1(...rest) {
  console.log(rest);
}
const html = highlight1`Học lập trình ${course} tại ${brand} ${price} !`;

function highlight2([first, ...strings], ...value) {
  return value.reduce(
    (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
    [first]
  );
}
const html2 = highlight2`Học lập trình ${course} tại ${brand}!`;
console.log(html2);