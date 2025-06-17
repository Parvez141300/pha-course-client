import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CourseCard from './CourseCard';

const PopularCourses = () => {
    const [popularCourse, setPopularCourse] = useState([]);
    console.log(popularCourse);

    useEffect(() => {
        axios.get('http://localhost:3000/enrolled-courses/popular')
        .then(res => {
            const data = res.data;
            setPopularCourse(data)
        })
        .catch(error => {
            toast.error(`${error.message}`)
        })
        
    }, [])



    return (
        <div className='space-y-5'>
            <h2 className="text-3xl font-bold">Popular Courses: ({popularCourse?.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    popularCourse.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;