import { MagicCard } from "@/components/magicui/magic-card";
import { Particles } from "@/components/magicui/particles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProjectSection() {
  const { resolvedTheme } = useTheme();
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden px-6">
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
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="mt-3 text-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A few projects I have worked on:
      </motion.p>

      {/* Project Cards */}
      <div className="grid grid-cols-3 gap-6 mt-12 w-full max-w-8xl relative z-10">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/10 dark:bg-black/30 border border-gray-200 dark:border-gray-700">
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">
                    Project {index + 1}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-300">
                    A brief description of the project goes here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 dark:text-gray-300">
                  Some details about the project and what it does.
                </CardContent>
                <CardFooter className="p-6 flex justify-center">
                  <Button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition duration-300 hover:shadow-blue-500/50">
                    View Project
                  </Button>
                </CardFooter>
              </MagicCard>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
