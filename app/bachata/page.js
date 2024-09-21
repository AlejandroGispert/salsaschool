"use client";
import { useEffect, useRef } from "react";
import * as React from "react";
import Head from "next/head";
import styles from "../page.module.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Bachata() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Pause the video initially
    videoElement.pause();

    // Set the current time to 60 seconds
    videoElement.currentTime = 60;

    // Play the video
    videoElement.play();

    // Cleanup function to pause the video if the component unmounts
    return () => {
      videoElement.pause();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bachata</title>
        <meta name="description" content="Cubansk salsadans informasjon" />
        <meta charSet="UTF-8" />
      </Head>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay
          muted
          playsInline
          title="video dancing bachata"
          aria-label="video dancing bachata"
          poster="/images/thumbnail.jpg" // Optimized thumbnail image
        >
          <source src="/videos/BACHATAlivan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className={styles.main}>
        <Container maxWidth="md">
          <Box
            className={styles.content}
            sx={{ textAlign: "center", mb: 4, padding: 7 }}
          >
            <Typography variant="h3" component="h3" gutterBottom>
              Bachata
            </Typography>
          </Box>

          <article lang="no" className={styles.bachataSection}>
            <section>
              <Typography variant="body1">
                Bachata er en stil med sosial dans fra Den Dominikanske
                republikk som nå danses over hele verden. Det er forbundet med
                bachatamusikk. Elegant og sensuell. Den regnes som en avart av
                bolero, med innflytelse fra afrikansk musikk og andre
                musikkstiler som son cubano, merengue og cha-cha-cha.
              </Typography>
            </section>

            <section>
              <Typography variant="body1">Vår instruktør</Typography>
              <Typography variant="body1">Livan Benitez</Typography>
            </section>
          </article>
        </Container>
      </main>
    </div>
  );
}
