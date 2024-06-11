function getCourseId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    return id;
} 

function renderCourse(course, targetID){
    // window.courseId.innerText = JSON.stringify(course, undefined, 4)
    const target = document.getElementById(targetID)
    target.innerHTML = `
    <h1>${course.courseName}</h1> 
    ID:${course.id},
    <span class ="dept">DEPT:${course.dept}</span>,
    <span class="number">Number${course.courseNum}</span>,        
    <h2>${course.instructor}</h2>
    <span class="number">${course.startDate}</span>
    <h2 class="days">${course.numDays}</h2>
     `;
}

function readCourse(targetID){
    // window.courseId.innerText = getCourseId();

const baseURL = "http://localhost:8081/api";
const coursesURI = "/courses/" + getCourseId();

fetch(baseURL + coursesURI).then(r=>r.json()).then(c => renderCourse(c, targetID));
}

function renderCourseForm(course, targetID){
    // window.courseId.innerText = JSON.stringify(course, undefined, 4)
    const target = document.getElementById(targetID)
    target.innerHTML = `
    <label>Course Name: <input id="courseName" value="${course.courseName}" type="text"></label>
    <label>Department: <input id="dept" value="${course.dept}" type="text"></label>
    <label>Course Number: <input id="courseNum" value="${course.courseNum}" type="number"></label>
    <label>Instructor: <input id="instructor" value="${course.instructor}" type="text"></label>
    <label>Start Date: <input id="startDate" value="${course.startDate}" type="date"></label>
    <label>Number Days: <input id="numDays" value="${course.numDays}" type="number"></label>
   
     `;
}

function courseFromForm(){
    return {
        courseName: courseName.value,
        dept: dept.value,
        courseNum: courseNum.value,
        instructor: instructor.value,
        startDate: startDate.value,
        numDays: numDays.value,
    }
}

function editCourse(targetID){
    // window.courseId.innerText = getCourseId();

const baseURL = "http://localhost:8081/api";
const coursesURI = "/courses/" + getCourseId();

fetch(baseURL + coursesURI).then(r=>r.json()).then(c => renderCourseForm(c, targetID));
}

function newCourse(targetID){
renderCourseForm(
    {
        courseName: "",
        dept: "",
        courseNum: "",
        instructor: "",
        startDate: "",
        numDays: "",
    }, targetID)
};