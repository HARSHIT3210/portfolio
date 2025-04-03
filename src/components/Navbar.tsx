"use client";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { DialogDemo } from "./dialog/modal";
import { ContactForm } from "./Contact";
import { ScrollProgress } from "./magicui/scroll-progress";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress className="top-[65px]" />
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling
            ? "bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-md"
            : "bg-transparent shadow-sm"
        }`}
      >
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Name & Links */}
            <div className="flex space-x-6 items-center">
              <a className="text-sm font-bold" href="#">
                <InteractiveHoverButton>Harshit Mehta</InteractiveHoverButton>
              </a>
              <div className="hidden md:flex space-x-6">
                {["About", "Projects", "Skills", "Blogs"].map((section) => (
                  <Link
                    key={section}
                    to={section.toLowerCase()}
                    smooth={true}
                    duration={800}
                    className="cursor-pointer hover:text-blue-500 dark:hover:text-gray-300"
                  >
                    {section}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Contact */}
            <div className="justify-end flex space-x-6 items-center">
              <DialogDemo
                dialogTrigger={
                  <p className="cursor-pointer hover:text-blue-500 dark:hover:text-gray-300">
                    Contact me
                  </p>
                }
                dialogTitle={"Contact Me"}
                dialogDescription={"Feel free to reach out to me."}
                dialogContent={<ContactForm />}
              />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Blurry Background Effect when Mobile Menu is Open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-md p-6 space-y-6 md:hidden z-50"
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Links */}
        {["About", "Projects", "Skills", "Blogs", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={800}
            className="block text-xl cursor-pointer hover:text-blue-500 dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {section}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
