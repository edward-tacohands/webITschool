import {courses} from '../data/courses.js';

const courseList = document.querySelector('#courses');

const initApp = () => { 
    loadCourses();
};

const loadCourses = () => {
    console.log('Hämtar kurser');
    for(let course of courses){
        generateCourseHtml(course);
    }
    
    const images = document.querySelectorAll('img');
    console.log(images);
    images.forEach(image => {
        image.addEventListener('click', () => {

        console.log(`Du klickade på ${image.getAttribute('courseId')}`)
        location.href = '../pages/course-details.html?course=' + image.getAttribute("courseId");
        });
    });
};

const generateCourseHtml = (course) => {
    const section = document.createElement('section');
    section.classList.add('card');

    const image = document.createElement('img');
    image.setAttribute('src', `../assets/images/${course.imageUrl}`);
    image.alt = course.title;
    image.setAttribute('courseId', course.id);

    section.appendChild(image);

    
    const info = document.createElement('p');
    info.innerText = course.title;
    
    section.appendChild(info);
    
    courseList.appendChild(section);
};

let html = ``;
const quickAndDirrty = (vehicle) => {
    html += `
    <section class ="card">
        <img src="../assets/images/${vehicle.imageUrl}" alt = "" />
    </section>
    `;
    vehicleList.innerHTML = html;

    console.log(html)
};

document.addEventListener('DOMContentLoaded', initApp); // initApp körs efter/om DOMContentLoaded eftersom inga ()