"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold tracking-wide uppercase antialiased">
            Featured Webinars
          </h2>
          <p className="mt-2 text-lg leading-8 font-bold tracking-tight text-neutral-300 sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={webinars} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}>
            <Button borderRadius="1.75rem">View All Webinars</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;

const webinars = [
  {
    title: "Mastering Music Production with DAWs",
    description:
      "Learn how to produce professional-level music using top Digital Audio Workstations like FL Studio and Ableton.",
    link: "https://youracademy.com/webinars/music-production",
  },
  {
    title: "Vocal Training & Singing Techniques",
    description:
      "Enhance your vocal strength and control through proven breathing exercises and vocal routines.",
    link: "https://youracademy.com/webinars/vocal-training",
  },
  {
    title: "Composing Melodies That Stick",
    description:
      "A step-by-step guide to crafting catchy, emotional melodies that your audience will remember.",
    link: "https://youracademy.com/webinars/melody-writing",
  },
  {
    title: "Music Theory for Absolute Beginners",
    description:
      "Explore the foundations of music — scales, chords, progressions — in an easy-to-grasp format.",
    link: "https://youracademy.com/webinars/music-theory",
  },
  {
    title: "Songwriting & Lyric Crafting Workshop",
    description:
      "Discover the art of writing powerful lyrics and structuring impactful songs from scratch.",
    link: "https://youracademy.com/webinars/songwriting",
  },
  {
    title: "Mixing & Mastering Essentials",
    description:
      "Get hands-on tips to achieve clarity, balance, and polish in your mixes and final masters.",
    link: "https://youracademy.com/webinars/mixing-mastering",
  },
];
