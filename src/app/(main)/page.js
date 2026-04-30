import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}
