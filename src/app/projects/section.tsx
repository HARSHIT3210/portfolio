import { MagicCard } from "@/components/magicui/magic-card";
import { Particles } from "@/components/magicui/particles";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectSection() {
  const { resolvedTheme } = useTheme();
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={200}
        color={color}
        refresh
      />

      {/* Title Section */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A few projects I have worked on:
      </motion.p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12 w-full max-w-6xl relative z-10">
        {[
          {
            title: "GrowFit",
            description:
              "A complete fitness management system with a focus on user experience and performance. Features descriptive workout plans, nutrition tracking, and progress monitoring from professionals all over India.",
            image: "/pexels-victorfreitas-841130.jpg",
          },
          {
            title: "Pocket Ops",
            description:
              "HRMS and ERP solution designed to streamline operations and enhance productivity. It offers a comprehensive suite of tools for managing HR, finance, and operations, all in one place.",
            image: "/pexels-pixabay-416405.jpg",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <MagicCard
              className="p-4 sm:p-6 rounded-xl shadow-xl bg-gray-100 dark:bg-gray-800 backdrop-blur-lg bg-opacity-40 border border-gray-300 dark:border-gray-700 flex flex-col h-full"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              {/* Image with Hover Effect */}
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out group-hover:blur-md"
                />
                {/* Overlay with Description (Initially Hidden) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                  <p className="text-sm sm:text-lg font-medium">
                    {project.description}
                  </p>
                </div>
              </div>

              <CardHeader className="mt-4">
                <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  {project.title}
                </CardTitle>
              </CardHeader>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
