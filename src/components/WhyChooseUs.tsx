"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "1. Expert Instructors",
    description:
      "Learn from highly skilled musicians and certified teachers who bring years of real-world experience into every lesson. Our instructors are passionate about helping you grow, no matter your skill level.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1682377780180-75c829427d85?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Expert Instructors"
        />
      </div>
    ),
  },
  {
    title: "2. Personalized Learning",
    description:
      "Every student learns differently. Our courses are tailored to suit your pace, goals, and music style — ensuring a customized learning journey that keeps you motivated and progressing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1696522732406-065ef560da8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Personalized Learning"
        />
      </div>
    ),
  },
  {
    title: "3. State-of-the-Art Studio",
    description:
      "Train in a professional-grade music studio equipped with modern instruments, recording setups, and acoustics. Experience hands-on practice in an inspiring environment.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="State of the art studio"
        />
      </div>
    ),
  },
  {
    title: "4. Performance Opportunities",
    description:
      "Showcase your talent in live concerts, recitals, and online events. We provide platforms to build confidence, connect with audiences, and grow as a performer.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1742829737412-337ff9098433?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Performance Opportunities"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full p-4 mt-5">
      <h1 className=" text-center text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold tracking-wide uppercase antialiased">
        Why Choose Us ?
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
