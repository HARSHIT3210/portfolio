"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { IconCloud } from "@/components/magicui/icon-cloud";

const skills = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "tailwindcss",
  "framer",
  "python",
  "java",
  "springboot",
  "nodejs",
  "express",
  "mongodb",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "github",
  "gitlab",
  "figma",
  "vercel",
  "nginx",
];

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const images = skills.map(
    (skill) => `https://cdn.simpleicons.org/${skill}/${skill}`
  );

  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row items-center justify-between overflow-hidden rounded-lg bg-background">
      {/* Particles Effect */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={200}
        color={color}
        refresh
      />

      {/* Left: Animated Skills Cloud */}
      <motion.div
        className="flex w-full md:ml-26 md:w-1/4 items-center justify-center z-10"
        whileHover={{ scale: 1.55 }}
      >
        <IconCloud images={images} />
      </motion.div>

      {/* Right: About Me Text */}
      <motion.div
        className="md:w-[60%] flex flex-col items-start space-y-4 p-6 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl shadow-lg z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1 className="text-6xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p className="text-lg md:text-[1.1rem] text-gray-700 dark:text-gray-300 leading-relaxed">
          I&apos;m{" "}
          <span className="font-semibold text-blue-500">Harshit Mehta</span>, a
          passionate Web Developer who builds **scalable** applications with
          modern frameworks & cloud technologies. I enjoy working on
          **innovative** projects & exploring new advancements in tech.
        </motion.p>

        <motion.p className="text-lg md:text-[1.1rem] text-gray-700 dark:text-gray-300 leading-relaxed">
          My expertise includes **React, Next.js, TailwindCSS** for frontend and
          **Node.js, Spring Boot, PostgreSQL** for backend. I&apos;m also
          exploring **AI-powered solutions & DevOps tools** like Docker and
          Nginx.
        </motion.p>
      </motion.div>
    </div>
  );
}
