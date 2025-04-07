import React from "react";
import styles from "./GlitchText.module.css";

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className={styles.glitch} data-text={text}>
      {text}
    </span>
  );
};

export default GlitchText;
