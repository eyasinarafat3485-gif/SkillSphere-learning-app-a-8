"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      expertise: "Full Stack Developer",
      image: "https://i.pravatar.cc/150?u=john",
      courses: 8
    },
    {
      id: 2,
      name: "Sarah Smith",
      expertise: "Next.js Specialist",
      image: "https://i.pravatar.cc/150?u=sarah",
      courses: 5
    },
    {
      id: 3,
      name: "Hussain Ahmed",
      expertise: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?u=hussain",
      courses: 13
    }
  ];
  return (
    <section className="mb-10 w-[95%] md:w-[90%] mx-auto ">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">Top Instructors</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {instructors.map(instructor => (
              <div key={instructor.id} className="group flex flex-col items-center p-6 bg-gray-100 rounded-3xl hover:bg-red-500 transition-all duration-300">
                <Image
                  src={instructor.image}
                  alt={instructor.name} width={128} height={128}
                  className=" rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white">{instructor.name}</h3>
                <p className="text-gray-500 group-hover:text-red-100 mb-2">{instructor.expertise}</p>
                <span className="bg-white text-red-500 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                  {instructor.courses} Courses
                </span>
              </div>

            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopInstructors;