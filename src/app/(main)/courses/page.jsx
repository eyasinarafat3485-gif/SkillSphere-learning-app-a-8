'use client';

import CourseCard from '@/components/CourseCard';
import { Button, Input, Spinner } from '@heroui/react';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const AllCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://skill-sphere-learning-app-a-8.vercel.app/data.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setFilteredCourses(data);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const filtered = courses.filter(course =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    if (loading) return <div className="flex justify-center items-center gap-2 h-[85vh]">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Courses loading...</span>
    </div>;

    return (
        <div className='my-10 w-[95%] md:w-[90%] mx-auto'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-center'>All Courses</h1>

            <div className=" mt-10 mx-auto flex items-center justify-center">
                <div className="relative group">
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search courses..."
                        className="w-full h-[52px] pl-12 pr-4 rounded-l-full border-2 border-gray-300 outline-none shadow-sm transition-all duration-300" />

                    <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                </div>

                <Button
                    onClick={handleSearch}
                    className="h-[52px] px-6 bg-red-500 text-white font-semibold rounded-r-full hover:bg-red-600 transition-all duration-300" >Search</Button>

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
                {
                    filteredCourses.length > 0 ? (
                        filteredCourses.map(course => <CourseCard key={course.id} course={course} />)
                    ) : (
                        <div className="col-span-full text-center py-10 text-gray-500 italic">
                            No courses found with that title.
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;