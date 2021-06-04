
var courseApi = 'http://localhost:3000/khoahoc'

function start() {
    getCourses(renderCourses)
    handleCreateForm()
}

start()

// Functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
        
}

function handleDeleteCourse(id) { // Xoa khi an vao nut delete
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id)
            if(courseItem) {
                courseItem.remove()
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                <button onclick="handleChangeCourse(${course.id})">Change</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm() { // tao moi khi an vao nut create
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        
        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function() {
            getCourses(renderCourses)
        })
    }
}

function handleChangeCourse(id) { // khi an vao nut change: hien khung thay doi va thay doi khi an vao nut save
    getCourses(renderCourses)
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
            <label style="width: 15%;">New Name</label>
            <input placeholder="Change: phan tu thu ${course.id}" type="text" name="new-name">
        </div>
        <div>
            <label style="width: 15%;">New Description</label>
            <input placeholder="Change: phan tu thu ${course.id}" type="text" name="new-description">
        </div>
        <div>
            <button id="save">Save</button>
        </div>
        `
        formChange.innerHTML = div

        var saveBtn = document.querySelector('#save')
        saveBtn.onclick = function() {
            var newName = document.querySelector('input[name="new-name"]').value
            var newDescription = document.querySelector('input[name="new-description"]').value
            var newFormData = {
                name: newName,
                description: newDescription
            }
            
            var option = {
                method: 'PUT',
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
                    getCourses(renderCourses)
                })

        }
    })
}