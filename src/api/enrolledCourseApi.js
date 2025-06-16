export const userEnrolledCoursePromiseApi = (email) => {
    return fetch(`http://localhost:3000/enrolled-courses?email=${email}`).then(res => res.json());
}