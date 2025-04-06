import { post } from './utilities/httpClient.js';

const form = document.querySelector('#addCourseForm');

const handleAddCourse = async (e) => {
  e.preventDefault();
  console.log("spara");

  const courseData = new FormData(e.target);
  const courseInfo = Object.fromEntries(courseData.entries());
  const result = await post('courses', courseInfo);
  console.log('Resultat:', result);
};

form.addEventListener('submit', handleAddCourse);