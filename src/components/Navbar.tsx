"use client";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { DialogDemo } from "./dialog/modal";
import { ContactForm } from "./Contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-50">
      <div className="max-w-7xl mx-5 px-6">
        <div className="flex justify-between h-16">
          <div className="flex space-x-6 items-center">
            <div className="text-sm font-bold">
              <InteractiveHoverButton>Harshit Mehta</InteractiveHoverButton>
            </div>
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

          {/* Right side - Contact */}
          <div className="justify-end flex space-x-6 items-center">
            <DialogDemo
              dialogTrigger={
                <p className="cursor-pointer hover:text-blue-500 dark:hover:text-gray-300">
                  Contact me
                </p>
              }
              dialogTitle={undefined}
              dialogDescription={undefined}
              dialogContent={<ContactForm />}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-md p-6 space-y-6 md:hidden z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        {["About", "Projects", "Contact"].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={800}
            className="block text-xl cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {section}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
