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

var listcoursesBlock = document.getElementById("list-courses");
var createbtn = document.getElementById('create');
var updatebtn = document.getElementById('update');
var inpName = document.querySelector('input[name="name"]');
var inpdisc = document.querySelector('input[name="discription"]');

createbtn.hidden = false
updatebtn.hidden = true 

var coursesAPI = "http://localhost:3000/courses";

function start(callback){
    getcourse(rendercourse)
    handleCreateForm()
}

start()

function getcourse(callback){
    fetch(coursesAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function createcourse(data, callback){
    var options = {
        method : 'POST',
        body :JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(coursesAPI, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}
function handleDeleteCourse(id){
    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(coursesAPI + '/' + id,options)
        .then(function(response){
            response.json();
        })
        .then(function(){
            getcourse(rendercourse);
        })
}

function editCourse(id,data,callback){
    var options = {
        method : 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(coursesAPI + '/' + id,options)
        .then(function(response){
            response.json();
        })
        .then(callback)
}

function rendercourse(courses){
    var htmls = courses.map(function(course){
        return `
            <li class="item-course-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.discription}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="handleEditCourse(${course.id},'${course.name}','${course.discription}')">Sửa</button>
            </li>
        `;
    });
    listcoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm (){
    createbtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var discription = document.querySelector('input[name="discription"]').value;
        var formData = {
            name: name,
            discription: discription
        };
        createcourse(formData,function(){
            getcourse(rendercourse);
        });
    }
}

function handleEditCourse(id,name,discription) {
    createbtn.hidden = true
    updatebtn.hidden = false

    inpName.value = name
    inpdisc.value = discription

    updatebtn.onclick = function(){
        var name = inpName.value;
        var discription = inpdisc.value;
        var formData = {
            name : name,
            discription : discription
        }
        editCourse(id,formData,function(){
            getcourse(rendercourse)
        })
        createbtn.hidden = false
        updatebtn.hidden = true
    }
}
