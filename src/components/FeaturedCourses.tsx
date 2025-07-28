import Link from "next/link";
import courseData from "../data/courses-data.json";
import { Button } from "./ui/moving-border";
import { WobbleCard } from "./ui/wobble-card";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-black">
      <div>
        <div className="text-center">
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold tracking-wide uppercase antialiased">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-300 sm:text-4xl">
            Learned With Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-10 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center relative">
              <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {course.title}
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  {course.description}
                </p>

                <img
                  src={course.image}
                  width={500}
                  height={500}
                  alt="Guitar"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-30 object-contain rounded-2xl"
                />
              </WobbleCard>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href={"/courses"}>
          <Button borderRadius="1.75rem">View All Courses</Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
