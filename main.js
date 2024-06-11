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
