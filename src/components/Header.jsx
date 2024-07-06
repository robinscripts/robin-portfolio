import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Avatar } from "@mui/material";
import logo from "../assets/logos/file.png";


const sections = [
  { section: "Home", href: "" },
  { section: "Skills", href: "#skills" },
  { section: "Portfolio", href: "#portfolio" },
  // { section: "About", href: "#about" },
  { section: "Contact", href: "#contact" },
];
function Header() {
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
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
      position={isSticky?"sticky":"absolute"}
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
          <Avatar alt="R" src={logo} sx={{width: 60,
                height: 60} }/>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            {sections.map(({ section, href }) => (
              <Link
                underline="none"
                color="#000"
                key={section}
                href={href}
                sx={{ fontSize: "1.2rem"}}
              >
                {section}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
