// components/AnimatedText.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
// components/AnimatedText.js

export default function AnimatedText() {
  const [activeWord, setActiveWord] = useState("salsa"); // Initialize the first word
  const words = ["salsa", "casino", "dans"]; // List of words to animate

  useEffect(() => {
    let currentWordIndex = 0;

    const interval = setInterval(() => {
      // Cycle through the words
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setActiveWord(words[currentWordIndex]);
    }, 1000); // Switch every 1 second

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className={styles.homeTextFrontContainer}>
      <span
        className={`${styles.word} ${
          activeWord === "salsa" ? styles.active : ""
        }`}
      >
        Salsa
      </span>
      <span> </span>
      <span
        className={`${styles.word} ${
          activeWord === "casino" ? styles.active : ""
        }`}
      >
        Casino
      </span>
      <span> </span>
      <span
        className={`${styles.word} ${
          activeWord === "dans" ? styles.active : ""
        }`}
      >
        Dans
      </span>
    </div>
  );
}
