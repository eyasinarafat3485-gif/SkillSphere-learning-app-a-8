import React from 'react';
import CourseCard from './CourseCard';
import Link from 'next/link';

const PopularCourses = async() => {
    const res= await fetch('https://skill-sphere-learning-app-a-8.vercel.app/data.json')
    const courses= await res.json();
    // console.log(courses);

    const topCourses= courses.slice(0, 3)
    console.log(topCourses);

    return (
        <div className=' w-[95%] md:w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-5xl text-gray-800 font-extrabold text-center'>Popular Courses</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {
                    topCourses.map(course => <CourseCard key={course.id} course={course}> </CourseCard>)
                }
            </div>
            <div className='text-center my-10'>
                <Link href={'/courses'}>
            <button className='btn bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-3xl py-2 px-5'>Show All</button>
            </Link>
            </div>
        </div>
    );
};

export default PopularCourses;