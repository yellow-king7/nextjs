import { Badge } from "@/app/_components/badge";
import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
export type CourseCardProps = CourseSummary & {};
export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  slug,
  level,
  subTitle,
  recordStatus,
  duration,
  title,
  basePrice,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="flex mt-2 gap-2 px-3 py-4 dark:text-info font-semibold">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
      </div>
      <div>
        <Badge variant="warning">{duration}</Badge>
        {basePrice}
      </div>
      <Link href={`/course/${slug}`} className="card-footer justify-center">
        مشاهده جزییات دوره
      </Link>
    </div>
  );
};
