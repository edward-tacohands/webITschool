import { get } from './utilities/httpClient.js';

const courseList = document.querySelector('#courses');

const initApp = () => { 
    loadCourses();
};

const loadCourses = async () => {
    try {
        const courses = await get('courses');
        console.log(courses);
    for(let course of courses){
        generateCourseHtml(course);
    }
    } catch (error) {
        console.log('Error Information', error);
    }
    
    const images = document.querySelectorAll('img');
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
    image.setAttribute('src', `${course.imageUrl}`);
    image.alt = course.title;
    image.setAttribute('courseId', course._id);

    section.appendChild(image);

    
    const info = document.createElement('p');
    info.innerText = course.title;
    
    section.appendChild(info);
    
    courseList.appendChild(section);
};

document.addEventListener('DOMContentLoaded', initApp); // initApp körs efter/om DOMContentLoaded eftersom inga ()