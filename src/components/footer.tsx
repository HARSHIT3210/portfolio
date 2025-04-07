"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";

export default function Footer() {
  const funMessages = [
    "Built with 💻 and ☕",
    "Thanks for scrolling! 🚀",
    "Keep coding, keep growing! 🌱",
    "Made with 99% caffeine ☕",
    "Debugging life... 🔧",
    "404: Sleep not found 😴",
    "Hello World! 🌎",
  ];

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Run only on the client
    setRandomMessage(
      funMessages[Math.floor(Math.random() * funMessages.length)]
    );
  }, []);

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
    <footer className="w-full text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <SocialButton
          href="https://github.com/HARSHIT3210"
          icon={<FaGithub />}
          tooltipMessage="GitHub"
        />
        <SocialButton
          href="https://www.linkedin.com/in/harshit-mehta-97294a32a"
          icon={<FaLinkedin />}
          tooltipMessage="LinkedIn"
        />
        <SocialButton
          href="https://www.instagram.com/harshit_mehta7"
          icon={<FaInstagram />}
          tooltipMessage="Instagram"
        />
      </div>
      {/* Only render randomMessage if it exists */}
      {randomMessage && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{randomMessage}</p>
      )}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Harshit Mehta. All rights reserved.
      </p>
    </footer>
  );
}
