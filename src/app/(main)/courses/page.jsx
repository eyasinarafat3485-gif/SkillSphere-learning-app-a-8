import CourseCard from '@/components/CourseCard';
import React from 'react';

const AllCoursesPage = async () => {
    const res = await fetch('https://skill-sphere-learning-app-a-8.vercel.app/data.json')
    const courses = await res.json();
    console.log(courses);
    return (
        <div className='my-10 w-[95%] md:w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-center'>All Courses</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {
                    courses.map(course => <CourseCard key={course.id} course={course}> </CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;