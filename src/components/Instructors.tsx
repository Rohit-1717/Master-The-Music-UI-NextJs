import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

function Instructors() {
  const items = [
    {
      id: 1,
      name: "Aarav Mehta",
      designation: "Guitar Instructor",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Riya Sharma",
      designation: "Vocal Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Kabir Desai",
      designation: "Drum Expert",
      image: "https://images.unsplash.com/photo-1606442090085-f73db6c30630?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Ananya Iyer",
      designation: "Piano Instructor",
      image: "https://images.unsplash.com/photo-1671973889217-117bc2ac8c71?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Meena Khanna",
      designation: "Music Theory Teacher",
      image: "https://plus.unsplash.com/premium_photo-1734388423015-1a7276b474b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Meera Nair",
      designation: "Classical Vocalist",
      image: "https://plus.unsplash.com/premium_photo-1664451820617-f8ca8ae00e8f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full mx-auto max-w-7xl flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-extrabold tracking-wide uppercase antialiased mb-10">
          Meet Our Instructors
        </h1>
        <p className="text-xl leading-8 font-light tracking-tight text-neutral-300 sm:text-xl">
          Expert musicians guiding your journey with passion and experience.
        </p>

        <div className="flex flex-row items-center justify-center w-full mt-10">
          <AnimatedTooltip items={items} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
