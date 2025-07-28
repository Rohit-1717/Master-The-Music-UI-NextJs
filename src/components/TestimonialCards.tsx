"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The guitar course was beyond amazing! The structured lessons and hands-on practice helped me play my first song in just 2 weeks.",
    name: "Aarav Mehta",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "I’ve taken music classes before, but this academy’s online vocal training was next level. The instructors are so supportive and talented.",
    name: "Simran Kapoor",
    title: "Vocal Course Student",
  },
  {
    quote:
      "The course content is rich, well-explained, and super interactive. I loved the piano lessons — it's like having a personal mentor at home.",
    name: "Kunal Sharma",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "As a working professional, I loved the flexibility of learning at my own pace. The music production course was well worth the investment.",
    name: "Ritika Sinha",
    title: "Music Production Learner",
  },
  {
    quote:
      "My child absolutely loves the keyboard course. The step-by-step approach makes learning fun and effective for kids too!",
    name: "Neha Joshi",
    title: "Parent of a Young Learner",
  },
  {
    quote:
      "I always wanted to sing professionally, and this platform made that dream possible. The vocal exercises really improved my range and confidence.",
    name: "Ananya Rao",
    title: "Aspiring Singer",
  },
  {
    quote:
      "From music theory to practical assignments, everything is top-notch. Highly recommend the advanced guitar course!",
    name: "Rajiv Kumar",
    title: "Intermediate Guitarist",
  },
  {
    quote:
      "The instructors are industry professionals and it shows. I gained real insights into audio mixing and sound design.",
    name: "Vikram Iyer",
    title: "Music Production Student",
  },
  {
    quote:
      "The best thing about this academy is the community. The live feedback sessions and challenges kept me motivated throughout the course.",
    name: "Megha Patel",
    title: "Flute Course Learner",
  },
  {
    quote:
      "I had zero knowledge of music, but now I can read sheet music and play chords confidently. Thank you for such a beginner-friendly approach.",
    name: "Deepak Nair",
    title: "Piano Beginner",
  },
  {
    quote:
      "The academy's singing course transformed my voice. The breathing and pitch techniques were super helpful.",
    name: "Ishika Deshmukh",
    title: "Online Vocal Student",
  },
  {
    quote:
      "I really appreciate the lifetime access to course materials. I revisit the modules whenever I need a refresh.",
    name: "Sahil Verma",
    title: "Music Learner",
  },
  {
    quote:
      "This was my first online course, and it couldn’t have been better. The instructors are so approachable and responsive.",
    name: "Priya Malhotra",
    title: "Violin Student",
  },
  {
    quote:
      "Their commitment to quality really shows. Every module is well-planned and keeps you engaged throughout.",
    name: "Manav Gupta",
    title: "Advanced Keyboard Student",
  },
  {
    quote:
      "I’ve taken both beginner and advanced courses here. The level of detail, structure, and encouragement is unmatched.",
    name: "Tanya Rathore",
    title: "Multi-instrument Learner",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold tracking-wide uppercase antialiased mb-10">
        Echoes of Excellence
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default TestimonialCards;
