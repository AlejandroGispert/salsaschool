"use client";

import * as React from "react";
import Head from "next/head";
import styles from "../page.module.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTranslation } from "react-i18next";

export default function jazzdance() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Head>
        <title>Jazz dans</title>
        <meta name="description" content="Cubansk salsadans informasjon" />
        <meta charSet="UTF-8" />
      </Head>

      <main className={styles.main}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 4, padding: 7 }}>
            {/* <Image
              src="/images/salsa-dancing.svg"
              width={700}
              height={400}
              alt="Cubansk Salsa"
              style={{ borderRadius: "8px" }}
            /> */}
            <Typography lang="no" variant="h3" component="h3" gutterBottom>
              {t("title")}
            </Typography>
          </Box>
          <article lang="no">
            <section aria-labelledby="section-1">
              <p>
                Det er en scenisk dansestil, som i USA på 1900-tallet smeltet
                sammen klassisk ballett med den svarte kulturens rytmikk og
                musikk til det som i dag er den vanlige danseformen i revyer,
                musikaler samt musikkvideoer. Jazzdansen får alltid nye trender
                og ser derfor radikalt annerledes ut i dag enn for f.eks. 20 år
                siden da hiphopen ennå ikke var etablert.
              </p>
              <p>
                Man kan derfor trygt fastslå at det er lenge siden jazzdans
                hadde noe å gjøre med begrepet jazz som vi kjenner fra musikken.
                Det som kanskje skiller den øvrige sceniske dansen fra
                jazzdansen er at jazzen som regel er influert av den til hver
                tid gjeldende populærkultur eller av nostalgi mot tidligere
                tiders ungdomsdans.
              </p>
            </section>
            <br />
            <section aria-labelledby="section-2">
              <p>
                Kritikere av jazzdans som kunstform har nettopp disse
                innvendingene; selve dansestilen er i våre dager sterkt
                inspirert av MTVs siste, hotte musikkvideoer, de følger ofte
                VG-listas siste musikk, etterlikninger eller pasticher av noe
                som har vært, gjerne noe som forlengst er innarbeidede klisjeer.
              </p>
              <p>
                Det hevdes derfor at jazzdansen tilfører for lite av egen
                integritet, nyskapende og grensesprengende nyutvikling til at
                den skal kunne betraktes som en egen seriøs retning innen den
                sceniske dansekunsten. KHIO er det eneste lærestedet i Norden
                som har likestilt klassisk, samtidsdansen og jazzdancen på
                bachelornivå.
              </p>
            </section>
            <br />
            <section aria-labelledby="section-3">
              <h2 id="section-3">Populæritet</h2>
              <p>
                Danseformen har en enorm appell ute blant publikum i mange
                aldre, så det er absolutt et stort marked. Jazzdans kjennetegnes
                av rytme, energi og intrikate trinn og høye spark.
              </p>
            </section>
            <br />
            <section aria-labelledby="section-4">
              <p>
                Betydningsfulle personer i jazzdansens utvikling har vært Matt
                Mattox, Luigi, og koreografene Bob Fosse, Alvin Ailey og
                Katherine Dunham med hver sine distinkte stiler.
              </p>
            </section>
            <br />
            <section aria-labelledby="section-5">
              <h2 id="section-5">Moderne Eksponering</h2>
              <p>
                I dag har jazzdansen kanskje størst eksponering gjennom
                TV-realityserien «So You Think You Can Dance» med høye seertall
                og ulike nasjonale TV-konkurranser over hele verden.
              </p>
            </section>
          </article>
        </Container>
      </main>
    </div>
  );
}
