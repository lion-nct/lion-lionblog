var courseApi = "http://localhost:3000/khoahoc";

function start() {
  getCourses(renderCourse);
  handleCreateForm();
}

start();

// GET API
function getCourses(callback) {
  console.log(callback);
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// POST
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

// DELETE
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
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

// PATCH
function updateCourse(id) {
  getCourses(renderCourse)
  fetch(courseApi)
  .then(function(response) {
      return response.json()
  })
  .then(function(courses) {
      return course = courses.find(function(course) {
          return course.id = id
      })
  })
  .then(function(course) {
      var formChange = document.getElementById('form')
      div = `
      <div>
          <label ">New Name</label>
          <input placeholder="Change:${course.id}" type="text" name="new-name">
      </div>
      <div>
          <label ">New Description</label>
          <input placeholder="Change:${course.id}" type="text" name="new-description">
      </div>
      <div>
          <button id="save">Save</button>
          <button id="exit">Exit</button>
      </div>
      `
      formChange.innerHTML = div


      var exitBtn = document.querySelector("#exit")
      exitBtn.onclick = function() {
        formChange.remove()
      }


      var saveBtn = document.querySelector('#save')
      saveBtn.onclick = function() {
          var newName = document.querySelector('input[name="new-name"]').value
          var newDescription = document.querySelector('input[name="new-description"]').value
          var newFormData = {
              name: newName,
              description: newDescription
          }
          
          var option = {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newFormData)
          }

          fetch(courseApi + '/' + id, option)
              .then(function(response) {
                  return response.json()
              })
              .then(function() {
                  getCourses(renderCourse)
              })

      }
  })
}

// RENDER
function renderCourse(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
      <li class="course-item-${course.id}">
        <h4 class="course-name-${course.id}">${course.name}</h4>
        <p class=".course-description-${course.id}">${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">DELETE</button>
        <button onclick="updateCourse(${course.id})">EDIT</button>
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
    })
  }
}