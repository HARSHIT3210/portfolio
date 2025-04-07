"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "./magicui/particles";

export default function About() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative h-screen w-full border-0 items-center justify-center overflow-hidden rounded-lg bg-background">
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
        About Me
      </motion.h1>
      <motion.p
        className="mt-3 w-1/2 ml-28 text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I am Harshit Mehta, a passionate Web Developer and AI enthusiast with a
        deep interest in cutting-edge technologies. I love building intuitive
        and scalable web applications and continuously exploring advancements in
        artificial intelligence.
      </motion.p>
    </div>
  );
}
