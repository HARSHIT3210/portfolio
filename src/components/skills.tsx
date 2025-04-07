import { JSX, useEffect, useState } from "react";
import { Marquee } from "./magicui/marquee";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({ name, icon }: { name: string; icon: JSX.Element }) => {
  return (
    <div className="flex items-center justify-center gap-3 p-4 rounded-full shadow-md bg-white dark:bg-gray-800 w-48">
      <span className="text-3xl">{icon}</span>
      <span className="font-medium text-sm dark:text-white">{name}</span>
    </div>
  );
};

export function SkillsMarquee() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative h-screen flex flex-col items-start border-0 justify-start w-full overflow-hidden py-10">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={200}
        color={color}
        refresh
      />
      <motion.h1
        className="text-6xl ml-28 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Tech Stack
      </motion.h1>
      <motion.p
        className="mt-3 ml-28 text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A selection of technologies I work with:
      </motion.p>

      {/* First Marquee Row */}
      <Marquee pauseOnHover className="mt-10 [--duration:10s]">
        {firstRow.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </Marquee>

      {/* Second Marquee Row (Reversed) */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </Marquee>

      {/* First Marquee Row Again*/}
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </Marquee>
      {/* Gradient Effect on Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
