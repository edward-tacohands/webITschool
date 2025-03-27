import { courses } from '../data/courses.js';

const pageTitle = document.querySelector('.page-title');
const courseImage = document.querySelector(".details img");
const title = document.querySelector(".info p:first-child");
const duration = document.querySelector(".info p:nth-child(2)");
const location = document.querySelector(".info p:nth-child(3)");
const extent = document.querySelector(".info p:nth-child(4)");
const applyBefore = document.querySelector(".info p:nth-child(5)");
const description = document.querySelector(".info p:nth-child(6)");

const initApp = () => {
    const params = new URLSearchParams(location.search);
    const courseId = params.get('id'); 
};


const loadCourse = (courseId) => {
  const course = courses.find((c) => c.id === +courseId);
  if(course) {   

    setPageTitle(course.title);
    setImage(course.imageUrl);
    genereateInfo(course);
  }
  else{
    console.log('hello');
  }
};
const setPageTitle = (title) => {
  pageTitle.innerText = title;
};

const setImage = (imageUrl) => {
  courseImage.src = `../assets/images/${imageUrl}`;
}

const genereateInfo = (course) => {
  title.innerHTML += ` <span>${course.title}</span>`;
  duration.innerHTML += ` <span>${course.duration}</span>`;
  location.innerHTML += ` <span>${course.location}</span>`;
  extent.innerHTML += ` <span>${course.extent}</span>`;
  applyBefore.innerHTML += ` <span>${course.applyBefore}</span>`;
  description.innerHTML += `<br/><span>${course.description}</span>`;
    description.style.textAlign = "justify";
};

document.addEventListener('DOMContentLoaded', initApp);

