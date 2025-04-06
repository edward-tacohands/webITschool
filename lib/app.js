import { post } from './utilities/httpClient.js';

const form = document.querySelector('#addCourseForm');

const handleAddCourse = async (e) => {
  e.preventDefault();

  const courseData = new FormData(e.target);
  const courseInfo = Object.fromEntries(courseData.entries());
  const result = await post('course', courseInfo);
  console.log('Resultat:', result);
};

form.addEventListener('submit', handleAddCourse);