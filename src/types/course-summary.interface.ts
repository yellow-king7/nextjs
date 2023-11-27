import { CourseLevel } from "@/enums/course-level.enum";

export interface CourseSummary {
  id: number;
  title: string;
  courseCategoryId: number;
  duration: string;
  level: string;
  levelNumber: CourseLevel;
  averageReviewRating: number | null;
  numOfReview: number | null;
  coverImageId: string;
  recordStatus: string;
  slug: string;
  subTitle: string;
  isFree: boolean;
  basePrice: number;
}
