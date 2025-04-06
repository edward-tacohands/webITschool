import { get, remove } from './utilities/httpClient.js';

const pageTitle = document.querySelector('.page-title');
const courseImage = document.querySelector(".details img");
const title = document.querySelector(".info p:first-child");
const duration = document.querySelector(".info p:nth-child(2)");
const adress = document.querySelector(".info p:nth-child(3)");
const extent = document.querySelector(".info p:nth-child(4)");
const applyBefore = document.querySelector(".info p:nth-child(5)");
const description = document.querySelector(".info p:nth-child(6)");
const deleteButton = document.querySelector('#deleteCourse');
const editBtn = document.querySelector("#editCourse");


let courseId;

const initApp = () => {
    courseId = location.search.split('=')[1];
    loadCourse(courseId);
    editBtn.href = `course-edit.html?id=${courseId}`;
};


const loadCourse = async (courseId) => {
  try {
    const course = await get(`courses/${courseId}`);

    setPageTitle(course.title);
    setImage(course.imageUrl);
    generateInfo(course);
  } catch (error) {
    console.log('Error information:', error);
  }
};

const handleDeleteCourse = async (e) => {
  e.preventDefault();

  const returnUrl = `${location.origin}/pages/gallery.html`;
  const result = await remove(`courses/${courseId}`);

  if (result === 200) {
    location.href = returnUrl;
  }
};

const setPageTitle = (title) => {
  pageTitle.innerText = title;
};

const setImage = (imageUrl) => {
  courseImage.src = `${imageUrl}`;
}

const generateInfo = (course) => {
  title.innerHTML += ` <span>${course.title}</span>`;
  duration.innerHTML += ` <span>${course.duration}</span>`;
  adress.innerHTML += ` <span>${course.adress}</span>`;
  extent.innerHTML += ` <span>${course.extent}</span>`;
  applyBefore.innerHTML += ` <span>${course.applyBefore}</span>`;
  description.innerHTML += `<br/><span>${course.description}</span>`;
  description.style.textAlign = "justify";
};

document.addEventListener('DOMContentLoaded', initApp);
deleteButton.addEventListener('click', handleDeleteCourse);


