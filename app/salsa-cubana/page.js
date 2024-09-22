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
      <div className={styles.videoWrapper}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          title="video dancing salsa"
          aria-label="video dancing salsa"
          poster="/images/salsa-dancing.svg" // Optimized thumbnail image
        >
          <source src="/videos/promo-salsa-class.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className={styles.main}>
        <Container maxWidth="md">
          <Box className={styles.content} sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Cubansk Salsadans (Casino)
            </Typography>
          </Box>

          <article lang="no">
            <section>
              <Typography variant="h4" component="h4" gutterBottom>
                Hva er cubansk salsadans?
              </Typography>
              <Typography variant="body1" paragraph>
                Cubansk salsadans, eller casino, er influert av ulike cubanske
                tradisjoner, som for eksempel dansen Son, Rumba og religionen
                Santeria. Musikken det danses til er ofte timba-musikk. Denne
                formen for salsa skiller seg fra de andre salsastilene ved at
                den kan oppfattes mer aggressive bevegelser enn andre stiler
                salsadans. Paret som danser beveger seg i sirkler rundt
                hverandre, til forskjell fra linje-stilen i salsa der parene
                «bytter plass» på en linje.
              </Typography>
            </section>

            <section>
              <Typography variant="h4" component="h4" gutterBottom>
                Figurer/Turer
              </Typography>
              <Typography variant="body1" paragraph>
                Det finnes mange figurer eller turer som brukes i cubansk
                salsadansing. Disse utgår enten fra lukket eller sosial posisjon
                og fra åpen posisjon. Det finnes mange dialekter av figurer,
                både i navn og innhold. Turene kan variere både på tvers av
                landegrenser, men også innad i land (Norge som Cuba). Allikevel
                finnes det noen grunnfigurer som brukes som standard og som de
                fleste andre turer bygger på: Enchufla, vacilala/dile que si,
                dile que no, exibila, coca cola og ronde. 70 er for eksempel
                bygget opp av dile que si-varianter og enchufla-varianter.
              </Typography>
            </section>

            <section>
              <Typography variant="h4" component="h4" gutterBottom>
                Rueda de Casino
              </Typography>
              <Typography variant="body1" paragraph>
                Rueda de casino eller rueda er en ringdans hvor cubansk salsa
                benyttes. En ruedaring dannes ved to eller flere par kommer
                sammen og hvor en roper instruksjoner til de andre.
                Instruksjonene er kall etter figurer og partnerbytter som gjøres
                synkront av alle i ringen. Selv om rueda kan være innøvd og
                forhåndskoreografert i showsammenheng er det likevel mest vanlig
                at den som roper kallene gjør dette spontant underveis i sangen.
                Den som kaller eller roper er tradisjonelt mann, men i Europa
                har det blitt mer og mer vanlig at kvinner også gjør dette.
                Turene som brukes er casinofigurene som hvert par kan danse hver
                for seg, men ofte er de tradisjonelle casinofigurene ilagte
                partnerbytter.
              </Typography>
            </section>

            <section>
              <Typography variant="body1">Vår instruktør</Typography>
              <Typography variant="body1">Livan Benitez</Typography>
              <Typography variant="body1">Ekte Cubano</Typography>
            </section>
          </article>
          <Image
            src="/images/salsa-dancing.svg"
            width={700}
            height={400}
            alt="Cubansk Salsa"
            style={{ borderRadius: "8px" }}
          />
        </Container>
      </main>
    </div>
  );
}
