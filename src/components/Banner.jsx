import { Button } from "@heroui/react";
import Link from "next/link";
// https://pixen-ai-image-generation-gallery.vercel.app/data.json
// https://pixen-ai-image-generation-gallery.vercel.app/category.json

const Banner = () => {
  return (
    <div className="bg-[url('/banner.webp')] h-[35vh] md:h-[75vh]  bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl my-10 w-[95%] md:w-[90%] mx-auto">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className=" mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-4 max-w-2xl">
            Upgrade Your Skills Today 🚀
          </h1>

          <div className="flex gap-4">
            <Link href="/">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500 cursor-pointer py-2 px-4 rounded-3xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;