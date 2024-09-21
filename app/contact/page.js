import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import styles from "../page.module.css";
export default function Contact() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Contact</h1>
        <section
          className="contact-info"
          aria-labelledby="contact-info-heading"
        >
          <br />
          <br />
          <p>
            <strong>Name:</strong> Livan Eduardo
          </p>
          <br />

          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+46646492"
              aria-label="Call Livan Benitez at 466 46 492"
            >
              +47 466 46 492
            </a>
          </p>

          <br />
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:salsacasinodans@gmail.com"
              aria-label="Email Livan Benitez at salsacasinodans@gmail.com"
            >
              salsacasinodans@gmail.com
            </a>
          </p>
          <br />
          <p>
            <strong>Address:</strong> Tomtegata 29, Drammen
          </p>
          <br />
          <p>
            <strong>Account Number:</strong> 9801 31 75306
          </p>
        </section>
      </div>
    </div>
  );
}
