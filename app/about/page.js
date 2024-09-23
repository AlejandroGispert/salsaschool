import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "../page.module.css";

export default function About() {
  return (
    <Container maxWidth="md" className={styles.header}>
      <Box
        sx={{ textAlign: "center", my: 4, margin: 4 }}
        className={styles.header}
      >
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          Salsa Casino Dans was founded in 2016 after its creator,{" "}
          <strong>
            <a href="#">Livan Benitez</a>
          </strong>
          , was asked to continue teaching Salsa after his previous role as a
          Salsa instructor at Union Scene ended. Old friends and students wanted
          to keep learning Salsa with Livan and asked him to stay. This became
          the foundation and starting point for what would become Livan’s
          vision: an established Cuban Salsa school in Drammen, Salsa Casino
          Dans.
        </Typography>
        <Typography variant="body1">
          Today, Salsa Casino Dans is a well-established Salsa school, and its
          development is due not only to the administrative efforts but also to
          the students. That’s why Salsa Casino Dans is not just a Salsa school
          but also a family where we share activities, lessons, travel, and
          memories. It’s a place where the dancer inside you emerges quickly.
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Liván Benitez
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Founder of the school
        </Typography>
        <Image
          src="/images/Profil.jpg"
          alt="Liván Benitez Profile Image"
          width="320"
          height="400"
          style={{ borderRadius: "8px" }}
        />

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1">
            In addition to many years of experience as a dance teacher, Liván
            Benitez has studied dance at the Universidad de las Artes in Havana,
            specializing in <strong>Afro-Cuban dance</strong>, and at the
            Norwegian College of Dance (Norges Dansehøyskole) in Oslo,
            specializing in <strong>Jazz dance</strong>.
          </Typography>
          <br />
          <ul className={styles.cvText}>
            <li>
              <strong>2014-2017:</strong> Norwegian College of Dance - Jazz
              dancer and pedagogue.
            </li>
            <li>
              <strong>2007-2012:</strong> Universidad de las Artes, Havana, Cuba
              - Bachelor's degree in dance.
            </li>
            <li>
              <strong>2005-2007:</strong> Universidad de las Artes (ISA),
              Havana, Cuba - Theater (acting).
            </li>
            <li>
              <strong>2003:</strong> Diploma in Show Production.
            </li>
            <li>
              <strong>2001-2003:</strong> Universidad Pedagógica, Camagüey, Cuba
              - Music teacher for secondary school.
            </li>
          </ul>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          <ul className={styles.cvText}>
            <li>
              <strong>2010-2012:</strong> Dancer at Tropicana, Havana, Cuba.
            </li>
            <li>
              <strong>2012:</strong> Dancer in TV Ballet in Cuba.
            </li>
            <li>
              <strong>2008:</strong> Dancer at the National Circus in Cuba.
            </li>
          </ul>
          <Image
            src="/images/dancer.png"
            alt="Liván Benitez Performance"
            width="300"
            height="200"
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Container>
  );
}
