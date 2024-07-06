import logo from "../assets/logos/file.png";
import React from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Avatar,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import RobinImage from "../assets/images/Robin.jpg";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const socialLinks = [
  {
    icon: <GitHub sx={{ height: 40, width: 40 }} />,
    link: "https://github.com/robinscripts",
  },
  {
    icon: <LinkedIn sx={{ height: 40, width: 40 }} />,
    link: "https://www.linkedin.com/in/robinsharma85",
  },
  {
    icon: <Instagram sx={{ height: 40, width: 40 }} />,
    link: "https://www.instagram.com/robin_1e",
  },
];

function Footer() {
  return (
    <footer id="footer">
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: "40px 0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>
              <Box>
                <Avatar
                  alt="R"
                  src={logo}
                  sx={{
                    width: 80,
                    height: 80,
                    filter: "brightness(0) invert(1) contrast(2)",
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Caffeinated and ready to brew solutions
              </Typography>
            </Grid>
            <Grid item>
              <List sx={{ display: "flex" }}>
                {socialLinks.map((link, index) => (
                  <ListItem key={index} disableGutters>
                    <IconButton
                      component="a"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        "&:hover": {
                          color: "secondary.main",
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Brewed with love and code | Copyright ©{" "}
                {new Date().getFullYear()} All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
