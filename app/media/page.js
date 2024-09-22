import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Import Grid component
import { useTheme } from "@mui/material/styles";
import styles from "../page.module.css";
import { Grid2 } from "@mui/material";
export default function Media() {
  const videos = [
    "https://www.youtube.com/embed/zS65_MG0LkQ?si=fnnBDzkL9riuamf8",
    "https://www.youtube.com/embed/t9Iz_SaffO4?si=1uHmNgmxMLsJG0i-",
    "https://www.youtube.com/embed/CiISNPcy5TA?si=VxBP_bf4S8oPGsg_",
    "https://www.youtube.com/embed/MX6ODQPrUW8?si=3jbhgz3fDr1psR_G",
    "https://www.youtube.com/embed/Vdt7FsZOaZQ?si=iHCoy7OgdhDlN5dV",
    "https://www.youtube.com/embed/CpkvnQr-20M?si=ddMQMeOa8JouXEQq",
  ];

  return (
    <div>
      <div className={styles.header}>
        <h1>Media</h1>
      </div>
      <Box mt={4} className={styles.mediaBox}>
        <Grid2 container spacing={2}>
          {videos.map((video, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              {video.includes("youtube.com") ? (
                <iframe
                  src={video}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.mediaVideos}
                ></iframe>
              ) : (
                <video
                  width="100%"
                  height="200"
                  controls
                  style={{ borderRadius: "8px" }}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
}
