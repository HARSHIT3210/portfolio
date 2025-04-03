import { Particles } from "@/components/magicui/particles";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProjectSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative h-screen flex flex-col border-0 items-start justify-start w-full overflow-hidden py-10">
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
        My Projects
      </motion.h1>
      <motion.p
        className="mt-3 ml-28 text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A Couple of projects I have worked on:
      </motion.p>
      
    </div>
  );
}
