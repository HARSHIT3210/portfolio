"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { IconCloud } from "@/components/magicui/icon-cloud";
import GlitchText from "./easter-eggs/glitch-text";

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
    <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-lg bg-background h-auto min-h-screen px-4 md:px-8 py-10">
      {/* Particles Effect */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={200}
        color={color}
        refresh
      />

      {/* Skills Cloud */}
      <motion.div
        className="flex w-full md:w-1/3 items-center justify-center z-10 mb-6 md:mb-0"
        whileHover={{ scale: 1.4 }}
      >
        <IconCloud images={images} />
      </motion.div>

      {/* About Me Section */}
      <motion.div
        className="w-full md:w-2/3 flex flex-col items-start space-y-6 p-4 md:p-8 backdrop-blur-md rounded-xl shadow-lg z-10 text-center md:text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold ml-17 md:ml-80 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <GlitchText
            className="text-xl font-extrabold text-gray-300"
            text="Hey There!"
          />{" "}
          I&apos;m a passionate
          <GlitchText
            className="text-xl font-extrabold text-gray-300"
            text="Web Developer"
          />{" "}
          who loves solving complex problems and building
          <GlitchText
            className="text-xl font-extrabold text-gray-300"
            text="Scalable Applications"
          />{" "}
          with modern frameworks & cloud technologies.
        </motion.p>

        {/* What I Love */}
        <motion.div className="space-y-3">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
            What I Love
          </motion.h2>
          <motion.p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            I enjoy working with{" "}
            <GlitchText
              className="text-xl font-extrabold text-gray-300"
              text="React, Next.js, and Tailwind CSS"
            />{" "}
            on the frontend and{" "}
            <GlitchText
              className="text-xl font-extrabold text-gray-300"
              text="Node.js, Express, and Spring Boot"
            />{" "}
            on the backend.
          </motion.p>
        </motion.div>

        {/* Beyond Coding */}
        <motion.div className="space-y-3">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
            Beyond Coding
          </motion.h2>
          <motion.p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            When I&apos;m not coding, you&apos;ll find me{" "}
            <GlitchText
              className="text-xl font-extrabold text-gray-300"
              text="Experimenting with new technologies"
            />
            , writing about{" "}
            <GlitchText
              className="text-xl font-extrabold text-gray-300"
              text="AI and Cloud"
            />
            , or brainstorming fun side projects.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
