import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Image from "next/image";

import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          title="Promo logo of Salsa Casino Dans school"
          aria-label="Promo logo of Salsa Casino Dans school"
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

      {/* Video Transcript (Optional, replace with actual content) */}
      <Box className={styles.transcript}>
        <h2>Video Transcript</h2>
        <p>This video showcases the Salsa Casino Dans school logo.</p>
      </Box>
    </div>
  );
}
