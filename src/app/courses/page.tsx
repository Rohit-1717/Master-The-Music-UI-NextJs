"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/courses-data.json";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: string;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-5xl font-sans  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-bold tracking-wide uppercase antialiased">
        All Courses ( {courseData.courses.length} )
      </h1>
      <div  className="flex flex-wrap justify-center gap-8">
        {courseData.courses.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-15 ">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/courses"
                  target="__blank"
                  className=" rounded-xl text-md font-normal  dark:text-white px-4 "
                >
                  Instructor: {course.instructor}
                </CardItem>
              </div>

              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/courses"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-sm font-semibold dark:text-white"
                >
                  Price : {course.price}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Join Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
