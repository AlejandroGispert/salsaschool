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

// Initialize Faro
const faro = initializeFaro({
  url: "https://faro-collector-prod-eu-north-0.grafana.net/collect/6c120f88f09c6db81207ed1aa0aaf357", // Your Grafana Faro instance URL
  app: {
    name: "salsaCasinoDans", // App name
    version: "1.0.0", // App version
    environment: "production", // Environment (e.g., production)
  },
  instrumentations: [
    ...getWebInstrumentations(), // Web instrumentations for page load, errors, etc.
    new TracingInstrumentation(), // Tracing instrumentation for capturing HTTP requests
    // React integration can be added here, if needed.
  ],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Function to handle route changes
    const handleRouteChange = (url) => {
      faro.api.pushEvent("page_view", { url });
    };

    // Push the initial page view
    faro.api.pushEvent("page_view", { url: window.location.href });

    // Listen for route changes and push events
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener when the component unmounts
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
