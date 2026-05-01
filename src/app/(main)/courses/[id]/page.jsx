import Image from 'next/image';
import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const res = await fetch('http://localhost:3000/data.json')
    const courses = await res.json();

    const course = courses.find(c => c.id == id);
    console.log(course);

    return (
        <div><h1 className='my-10 text-3xl md:text-5xl font-extrabold text-center'>Courses Details Page</h1>
        <div className='my-10 w-[95%] md:w-[450px] mx-auto text-center border border-gray-200 rounded-xl'>
            <div className=' space-y-3 '>
                <Image src={course.image} width={450} height={300} alt='photo.title' className=' mx-auto rounded-xl' />
                <h1 className='font-bold text-lg'>{course.title}</h1>
                <p className='text-[14px]'>{course.description}</p>
                <div className='flex gap-40 justify-center '>
                    <div className='flex gap-2 items-center '>
                        <p className='text-md font-semibold'>Category: {course.category}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-md font-semibold'>Duration: {course.duration}</p>
                    </div>
                    
                </div>
                <div className='flex justify-between pb-5 px-4'>
                    <div className='flex gap-2 items-center '>
                        <FaUser className='text-orange-600 cursor-pointer' />
                        <p className='text-xl font-bold'>{course.instructor}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-orange-600 cursor-pointer' />
                        <p className='text-xl font-bold'>{course.rating}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default CourseDetailsPage;