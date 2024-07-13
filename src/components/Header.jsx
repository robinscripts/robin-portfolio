import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Avatar, IconButton } from "@mui/material";
import logo from "../assets/logos/file.png";
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

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      position={isSticky ? "sticky" : "relative"}
      elevation={isSticky ? 4 : 0}
      sx={{
        bgcolor: "transparent.main",
        backdropFilter: "blur(60px)",
        transition: "top 0.3s ease-in-out",
      }}
    >
      <Container disableGutters maxWidth="lg">
        <Toolbar
          align
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", marginY: 2 }}
        >
          <Box>
            <Avatar alt="R" src={logo} sx={{ width: 60, height: 60 }} />
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            {socialLinks.map((handle, index) => (
              <IconButton
                component="a"
                href={handle.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.main",
                    backgroundColor: "inherit"
                  },
                }}
              >
                {handle.icon}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
