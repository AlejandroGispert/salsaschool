"use client";

import * as React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { appWithTranslation } from "next-i18next";
import { Salsa } from "@next/font/google"; // Import the Salsa font
import { initializeFaro, getWebInstrumentations } from "@grafana/faro-react"; // Correct imports for Grafana Faro
import { TracingInstrumentation } from "@grafana/faro-web-tracing"; // Import tracing instrumentation
import { useRouter } from "next/router"; // Use Next.js router

// Configure the Salsa font
const salsa = Salsa({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Specify the subset you need
});

let faro;

if (typeof window !== "undefined") {
  // Initialize Faro only on the client-side
  faro = initializeFaro({
    url: "https://faro-collector-prod-eu-north-0.grafana.net/collect/6c120f88f09c6db81207ed1aa0aaf357", // Your Grafana Faro instance URL
    app: {
      name: "salsaCasinoDans", // App name
      version: "1.0.0", // App version
      environment: "production", // Environment (e.g., production)
    },
    instrumentations: [
      ...getWebInstrumentations(), // Web instrumentations for page load, errors, etc.
      new TracingInstrumentation(), // Tracing instrumentation for capturing HTTP requests
    ],
  });
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!faro) {
      console.log("Faro is not initialized");
      return;
    }
  
    // Push initial page view
    const initialUrl = window.location.href;
    console.log("Pushing initial page view:", initialUrl);
    faro.api.pushEvent("page_view", { url: initialUrl });
  
    // Function to handle route changes
    const handleRouteChange = (url) => {
      console.log("Pushing route change event:", url);
      faro.api.pushEvent("page_view", { url });
    };
  
    router.events.on("routeChangeComplete", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  
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
