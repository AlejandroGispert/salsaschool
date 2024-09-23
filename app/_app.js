"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { appWithTranslation } from "next-i18next";
import { Salsa } from "@next/font/google"; // Import the Salsa font

// Configure the Salsa font
const salsa = Salsa({
  weight: ["400"], // You can specify weights as needed
  subsets: ["latin"], // Specify the subset you need
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={salsa.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
