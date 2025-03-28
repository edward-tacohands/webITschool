

const courseForm = document.querySelector("#item-form");
const courseInput = document.querySelector("#item-input");
const courseList = document.querySelector("#item-list");
const clearAll = document.querySelector("#clear");

const initApp = () => {

}

const handleAddCourse = (e) => {
    e.preventDefault();
    const course = courseInput.value;
    addCourseToDom(course);
};

const addCourseToDom = (course) => {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(course));

    courseList.appendChild(item);
}

document.addEventListener('DOMContentLoaded', initApp);
courseForm.addEventListener('submit', handleAddCourse);
