"use client";
import { Button } from "@heroui/react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    price: "$49",
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    price: "$39",
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    price: "$29",
  },
  {
    id: 4,
    title: "React & Next.js Advanced",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    price: "$59",
  },
];

const TrendingCourses = () => {
  return (
    <section className="mb-10 w-[95%] md:w-[90%] mx-auto ">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            🔥 Trending Courses
          </h2>
          <p className="text-gray-500 mt-2">
            Most popular courses picked by learners
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {course.title}
                </h3>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-blue-600 font-bold">
                    {course.price}
                  </span>

                    <Button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                      View
                    </Button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrendingCourses;