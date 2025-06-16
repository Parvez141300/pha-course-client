export const userCoursePromiseApi = (email) => {
    return fetch(`http://localhost:3000/user-courses?email=${email}`).then(res => res.json());
}