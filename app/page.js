"use client";
import * as React from "react";
import { useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef(null); // Reference to the video element

  // useEffect to apply fade out when video ends
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      // Add fade-out class
      video.classList.add(styles.fadeOut);

      // After the fade-out effect, restart the video
      setTimeout(() => {
        video.classList.remove(styles.fadeOut);
        video.currentTime = 0; // Reset video to start
        video.play(); // Play again
      }, 500); // Match the fade-out duration
    };

    // Event listener for video end
    video.addEventListener("ended", handleVideoEnd);

    // Cleanup the event listener on component unmount
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay
          muted
          playsInline
          title="Promo video of Salsa Casino Dans school"
          aria-label="Promo video of Salsa Casino Dans school"
          poster="/images/thumbnail.jpg" // Optimized thumbnail image
        >
          <source src="/videos/promo-short.mp4" type="video/mp4" />
          <source src="/videos/promo-short.webm" type="video/webm" />{" "}
          {/* Fallback format */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <Box className={styles.content}>
        <h1>Welcome to Salsa Casino Dans</h1>
      </Box>

      <Box className={styles.transcript}>
        <h2>Video Transcript</h2>
        <p>
          This video showcases the Salsa Casino Dans school, highlighting
          various dance moves, lessons, and student performances. Learn more
          about our classes and events at Salsa Casino Dans.
        </p>
      </Box>
    </div>
  );
}
