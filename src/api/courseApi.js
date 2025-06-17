export const userCoursePromiseApi = (email, accessToken) => {
    return fetch(`https://assignment-11-server-tau-eight.vercel.app/user-courses?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
}