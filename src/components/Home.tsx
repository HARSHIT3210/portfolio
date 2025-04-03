"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Particles } from "./magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);
  const SocialButton = ({
    href,
    icon,
    tooltipMessage,
  }: {
    href: string;
    icon: React.ReactNode;
    tooltipMessage?: string;
  }) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link target="_blank" href={href}>
              <Button
                variant={"ghost"}
                className="p-3 cursor-pointer text-lg rounded-full border border-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white shadow-md dark:border-gray-400"
              >
                {icon}
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipMessage}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="relative flex h-screen w-full border-0 items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="flex items-center justify-between w-full ml-28 z-10">
        {/* Left Content */}
        <div>
          <motion.h1
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Harshit Mehta
          </motion.h1>
          <motion.p
            className="mt-3 text-2xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Web Developer | AI Enthusiast | Tech Explorer
          </motion.p>
          <motion.div
            className="flex space-x-2 mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SocialButton
              href="https://github.com/HARSHIT3210"
              icon={<FaGithub />}
              tooltipMessage="Check out my GitHub"
            />
            <SocialButton
              href="https://www.linkedin.com/in/harshit-mehta-97294a32a"
              icon={<FaLinkedin />}
              tooltipMessage="Connect with me on LinkedIn"
            />
            <SocialButton
              href="https://www.instagram.com/harshit_mehta7"
              icon={<FaInstagram />}
              tooltipMessage="Follow me on Instagram"
            />
            <SocialButton
              href="/resume.pdf"
              icon={<IoMdCloudDownload />}
              tooltipMessage="Download Resume"
            />
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.img
          src="/profile.jpg" // Add your image inside the public folder
          alt="Harshit Mehta"
          className="w-80 h-80 mr-36 object-cover rounded-full border-gray-500 shadow-lg dark:border-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={200}
        color={color}
        refresh
      />
    </div>
  );
}
