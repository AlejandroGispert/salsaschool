import * as React from "react";
import Head from "next/head";
import styles from "../page.module.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function salsa() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cubansk Salsa</title>
        <meta name="description" content="Cubansk salsadans informasjon" />
        <meta charSet="UTF-8" />
      </Head>

      <main className={styles.main}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 4, padding: 7 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Ladystyling
            </Typography>
          </Box>

          <article lang="no">
            <section>
              <Typography variant="body1">
                Ladystyling er viktig i Cubansk Salsa. På denne måten kan damen
                komplementere samspillet mellom henne og sin partner. Det sies
                at mannen fører i dansen, men kvinnen pynter dansen med sine
                grasiøse bevegelser. Dette er også en læringsprosess.
              </Typography>
            </section>

            <section>
              <Typography variant="body1">Vår instruktør</Typography>
              <Typography variant="body1">Livan Benitez</Typography>
              <Typography variant="body1">Ekte Cubano</Typography>
            </section>
          </article>
        </Container>
      </main>
    </div>
  );
}
