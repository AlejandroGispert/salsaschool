"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { appWithTranslation } from "next-i18next";
import { Salsa } from "@next/font/google"; // Import the Salsa font
import { faro } from "@grafana/faro-react";
import { matchRoutes } from "next/navigation";
// Configure the Salsa font
import { useRouter } from "next/router";
const salsa = Salsa({
  weight: ["400"], // You can specify weights as needed
  subsets: ["latin"], // Specify the subset you need
});

const faro = initializeFaro({
  url: "https://faro-collector-prod-eu-north-0.grafana.net/collect/6c120f88f09c6db81207ed1aa0aaf357",
  app: {
    name: "salsaCasinoDans",
    version: "1.0.0",
    environment: "production",
  },

  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    // React integration for React applications.
    new ReactIntegration({
      router: createReactRouterV6DataOptions({
        matchRoutes,
      }),
    }),
  ],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      faro.api.pushEvent("page_view", { url });
    };
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
