import {put} from "./utilities/httpClient.js";

const form = document.querySelector("#editCourseForm");

const handleEditCourse = async (e) => {
    e.preventDefault();
    const courseId = location.search.split("=")[1];

    const courseData = new FormData (e.target);
    const courseInfo = Object.fromEntries(courseData.entries());
    const result = await put(`courses/${courseId}`, courseInfo);
    console.log('Resultat:', result);
};

form.addEventListener('submit', handleEditCourse);