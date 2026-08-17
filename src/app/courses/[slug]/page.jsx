import CourseDetailView from "@/components/courses/CourseDetailView";
import { coursesData } from "../../../data/coursesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}