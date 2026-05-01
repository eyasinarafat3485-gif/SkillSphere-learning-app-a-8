import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar, FaUser } from "react-icons/fa";

const CourseCard = ({ course }) => {
    console.log(course);
    return (
        <div>
            <div className='border border-gray-700 rounded-xl object-cover p-4 space-y-3 hover:shadow-lg shadow-gray-600'>
                <Chip className="absolute size-sm animation-duration-initial">{course.level}</Chip>
                <div className='relative w-full aspect-square'>
                    <Image src={course?.image} fill alt='course.title' className='object-cover rounded-xl hover:-translate-y-1 hover:shadow-lg' />
                    
                </div>
                <div>
                    <h2 className='font-semibold text-2xl'>{course.title}</h2>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <FaUser className='text-orange-600 cursor-pointer' />
                        <p>{course.instructor}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaStar className='text-orange-600 cursor-pointer' />
                        <p>{course.rating}</p>
                    </div>
                </div>

                <Link href={`/courses/${course.id}`} >
                    <Button variant="" className='w-full bg-[#485966] text-white hover:bg-red-600'>View Details <FaArrowRight /> </Button>
                </Link>

            </div>

        </div>

    );
};

export default CourseCard;