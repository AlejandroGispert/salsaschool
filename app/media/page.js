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
export default function Media() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Media</h1>
        <Button variant="contained" color="primary">
          Material UI Button
        </Button>
      </div>
    </div>
  );
}
