import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar, FaUser } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const levelColors = {
        Beginner: "bg-purple-200 text-purple-800",
        Intermediate: "bg-orange-200 text-orange-800",
        Advanced: "bg-green-200 text-green-800",
    };
    return (
        <div>
            <div className='border border-gray-700 rounded-xl p-4 space-y-3 hover:shadow-lg shadow-gray-600 overflow-hidden group relative'>

                <Chip
                    className={`absolute top-2 right-2  z-10 font-medium p-2 ${levelColors[course.level] || "bg-gray-200 text-gray-800"
                        }`}
                >
                    {course.level}
                </Chip>

                <div className='relative w-full aspect-square overflow-hidden rounded-xl'>
                    <Image
                        src={course?.image}
                        fill
                        alt={course.title}
                        className='object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-90' />

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <div>
                    <h2 className='font-semibold text-2xl'>{course.title}</h2>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <FaUser className='text-orange-600' />
                        <p>{course.instructor}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-orange-600' />
                        <p>{course.rating}</p>
                    </div>
                </div>

                <Link href={`/courses/${course.id}`}>
                    <Button className='w-full bg-[#485966] text-white hover:bg-red-600 flex items-center justify-center gap-2'>
                        View Details <FaArrowRight />
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default CourseCard;