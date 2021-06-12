var courseApi = "http://localhost:3000/khoahoc";

function start() {
  // ở dưới là function lồng function nên cách viết tối ưu
  getCourses(renderCourse);
  //getCourses(renderCourse);

  // cách viết thông thường
  // getCourses(function(courses) {
  //   console.log(courses)
  //   // gọi renderCourse và truyền courses vào
  //   renderCourse(courses);
  // });

  handleCreateForm();
}

start();

// GET GIÁ TRỊ TỪ API
function getCourses(callback) {
  console.log(callback);
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    // .then(function(data){
    //   console.log(data)
    // })
    .then(callback);
}

// POST
// ở dưới truyền 2 đối số thì trên này cũng vậy
function createCourse(data, callback) {
  options = {
    method: "POST",
    // thêm headers để thêm được dữ liệu vào database
    headers: {
      "Content-Type": "application/json",
    },
    // lấy dữ liệu từ data truyền vào và gửi đi
    body: JSON.stringify(data),
  };

  // đối số đầu là URL <phần code dưới>,
  // đố số 2 là 1 tùy chọn (thêm xóa sửa gì đấy)<phần code viết riêng bên trên>
  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    // callback nhận lại chính dữ liệu mới ở đây
    .then(callback);
}

// DELETE
function handleDeleteCourse(id) {
  options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // phải có "/" nối thêm id cần xóa
  fetch(courseApi + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      // get và render lại code sau khi delete nhưng gọi lại API (refresh lại trang)
      // getCourses(renderCourse);

      // cách xóa không cần gọi lại API (không refresh lại trang)
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove(); // xóa khỏi DOM không cần gọi lại API
      }
    });
}

// PATCH
function updateCourse(id) {
  var newName = document.querySelector("input[name='name']");
  var newDescription = document.querySelector("input[name='description']");

  var name = document.querySelector(".course-item-" + id);
  var description = document.querySelector(".course-description-" + id);

  newName.value = name.innerText;
  newDescription.value = description.innerText;

  var saveBtn = document.querySelector("#create");
  saveBtn.innerHTML = "SAVE";

  saveBtn.onclick = function () {
    var updateData = {
      name: newName.value,
      description: newDescription.value,
    };

    var options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    };

    fetch(courseApi + "/" + id, options)
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        getCourse(renderCourse);
      });
  };
}

// RENDER
// trả lại dữ liệu sau khi lấy từ API --> callback ở trên và trả dữ liệu tại courses
function renderCourse(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    // tạo 1 class="course-item-${course.id}" để phương thức DELETE bên dưới xóa đúng ID cần xóa
    return `
      <li class="course-item-${course.id}">
        <h4 class="course-name-${course.id}">${course.name}</h4>
        <p class=".course-description-${course.id}">${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">DELETE</button>
        <button onclick="updateCourse(${course.id})">EDIT</button>
      </li>
      `;
    // viết hàm handleDeleteCourse() truyền vào ${course.id} vì method DELETE xóa bằng id
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    // lấy giá trị nhập vào từ ô input
    var name = document.querySelector("input[name='name']").value;
    var description = document.querySelector("input[name='description']").value;

    // gom lại các value đã lấy vào 1 object riêng
    var formData = {
      name: name,
      description: description,
    };

    // đối số 1 tạo(gửi đi tất cả value đã lấy)
    // đối số 2 truyền vào 1 function để render lại code mà không cần load lại trang
    createCourse(formData, function () {
      getCourses(renderCourse);
    });
  };
}