import React from "react";
import styles from "./GlitchText.module.css";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  return (
    <span className={`${styles.glitch} ${className}`} data-text={text}>
      {text}
    </span>
  );
};

export default GlitchText;
