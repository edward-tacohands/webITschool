import { courses } from '../data/courses.js';

const pageTitle = document.querySelector('.page-title');
const courseImage = document.querySelector(".details img");
const title = document.querySelector(".info p:first-child");
const duration = document.querySelector(".info p:nth-child(2)");
const adress = document.querySelector(".info p:nth-child(3)");
const extent = document.querySelector(".info p:nth-child(4)");
const applyBefore = document.querySelector(".info p:nth-child(5)");
const description = document.querySelector(".info p:nth-child(6)");

const initApp = () => {
    const courseId = location.search.split('=')[1];
    loadCourse(courseId);
};


const loadCourse = (courseId) => {
  const course = courses.find((c) => c.id === +courseId);
  if(course) {   
    setPageTitle(course.title);
    setImage(course.imageUrl);
    genereateInfo(course);
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
  adress.innerHTML += ` <span>${course.adress}</span>`;
  extent.innerHTML += ` <span>${course.extent}</span>`;
  applyBefore.innerHTML += ` <span>${course.applyBefore}</span>`;
  description.innerHTML += `<br/><span>${course.description}</span>`;
  description.style.textAlign = "justify";
};

document.addEventListener('DOMContentLoaded', initApp);

