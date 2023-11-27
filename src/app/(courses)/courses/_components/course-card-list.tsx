import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";

export type CourseCardListProps = {
  courses: CourseSummary[];
};
export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}: CourseCardListProps) => {
  return (
    <div className="flex justify-center xl:justify-start mt-2 flex-wrap gap-6">
      {courses.map((course) => (
        <CourseCard key={`card-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
