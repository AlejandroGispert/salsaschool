// components/Footer.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",

        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Salsa Casino Dance School & Academy Norway
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"© "}
          {new Date().getFullYear()} created by Alejandro Gispert. All rights
          reserved.
        </Typography>
      </Container>
    </Box>
  );
}
