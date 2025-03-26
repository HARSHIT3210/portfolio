"use client";

import { Particles } from "@/components/magicui/particles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const SocialButton = ({
    href,
    icon,
  }: {
    href: string;
    icon: React.ReactNode;
  }) => {
    return (
      <Link target="_blank" href={href}>
        <Button
          variant={"ghost"}
          className="p-3 cursor-pointer text-lg rounded-full border border-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white shadow-md dark:border-gray-400"
        >
          {icon}
        </Button>
      </Link>
    );
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background">
      <motion.h1
        className="ml-12 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&apos;m <span className="text-blue-500"> Harshit Mehta</span>
      </motion.h1>
      <motion.p
        className="mt-3 ml-12 text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Web Developer | AI Enthusiast | Tech Explorer
      </motion.p>
      <motion.div
        className="flex ml-12 space-x-2 mt-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SocialButton
          href="https://github.com/HARSHIT3210"
          icon={<FaGithub />}
        />
        <SocialButton
          href="https://www.linkedin.com/in/harshit-mehta-97294a32a"
          icon={<FaLinkedin />}
        />
        <SocialButton
          href="https://www.instagram.com/harshit_mehta7"
          icon={<FaInstagram />}
        />
      </motion.div>

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
