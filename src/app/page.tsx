import Image from "next/image";
import { Colors } from "./_components/colors/colors";
import { Button } from "./_components/button";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCardList } from "./(courses)/courses/_components/course-card-list";
async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}
export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-bold">تازه ترین دوره های اموزشی</h2>
          <p>برای به روز موندن یادگرفتن نکات جدید ضروریه!</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
