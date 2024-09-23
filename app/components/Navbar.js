"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styles from "../page.module.css";

export default function Navbar() {
  // State to control drawer
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer Open/Close
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (Menu Items)
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Home",
          "Pricing",
          "Salsa Cubana",
          "Bachata",
          "Mens style",
          "Ladies style",
          "Media",
          "About",
          "Contact",
        ].map((text) => (
          <ListItem button key={text}>
            <Link href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} passHref>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      {/* AppBar for the Navbar */}
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          {/* Hamburger Icon Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Opens drawer when clicked
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={styles.title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <strong>Salsa Casino</strong> - Salsaskolen i Drammen
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/" passHref>
                Home
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/salsa-cubana" passHref>
                Salsa
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/bachata" passHref>
                Bachata
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/pricing" passHref>
                Pricing
              </Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </Button>
            {/* Language switcher */}
            {/* <div>
              <Link href={router.asPath} locale="en">
                English
              </Link>{" "}
              |{" "}
              <Link href={router.asPath} locale="no">
                Norsk
              </Link>
            </div> */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer component for mobile menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
