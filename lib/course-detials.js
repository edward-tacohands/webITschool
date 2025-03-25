import {courses} from '../data/course.js';

const initApp = () => { 
    console.log(location.search);
    const courseId = location.search.split('=')[1]; 
    console.log(courseId, typeof courseId);
    loadCourses(courseId);
}

const loadCourses = (courseId) => {
    const course = courses.find((c) => c.id === +courseId);
    console.log(course);
}

document.addEventListener('DOMContentLoaded', initApp);