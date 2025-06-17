export const userEnrolledCoursePromiseApi = (email) => {
    return fetch(`https://assignment-11-server-tau-eight.vercel.app/enrolled-courses?email=${email}`).then(res => res.json());
}