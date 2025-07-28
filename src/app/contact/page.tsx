"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full px-4 py-70 md:py-20 bg-white dark:bg-black ">
      <BackgroundLines className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        <h2 className="bg-clip-text text-transparent text-center uppercase bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-white text-3xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight z-20">
          Contact Us
        </h2>

        <p className="max-w-xl mx-auto mt-4 text-sm md:text-lg text-center text-neutral-700 dark:text-neutral-400">
          Got questions or curious about your musical path? 🎶 <br />
          Let our passionate artists, vocal coaches, and instrument wizards
          guide you — one note at a time.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4 ">
            <Label htmlFor="email">Query ?</Label>
            <Input
              className={cn(
                `shadow-input dark:placeholder-text-neutral-600 flex h-20 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`
              )}
              id="Text"
              placeholder="How to get enroll for performance at solo night event."
              type="query"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
      </BackgroundLines>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default page;
