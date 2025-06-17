export const userEnrolledCoursePromiseApi = (email, accessToken) => {
    return fetch(`https://assignment-11-server-tau-eight.vercel.app/enrolled-courses?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
}