import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function LogoEasterEgg() {
  const { setTheme, theme } = useTheme();
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks >= 2) {
      setTheme(theme === "dark" ? "light" : "dark");
      setClicks(0);
    }
  };

  return (
    <motion.img
          src="/profile.jpg"
          alt="Harshit Mehta"
          className="w-40 h-40 sm:w-80 sm:h-80 mt-6 sm:mt-0 object-cover rounded-full border-gray-500 shadow-lg dark:border-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={handleClick}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        />
  );
}
