import React from "react";
import SectionHeader from "./SectionComponents/SectionHeader";
import IFrame from "./SectionComponents/IFrame";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const projects = [
  {
    title: "Mega Blog",
    link: "https://mega-blog-bice-five.vercel.app/",
    description: "Lizards are a widespread group of squamate reptiles...",
    srcCode:"",
  },
  {
    title: "Weather App",
    link: "https://robinscripts.github.io/weather-app/",
    srcCode:"",
    description: "A popular pet reptile known for its vibrant patterns...",
  },
  {
    title: "Drawing Board",
    link: "https://robinscripts.github.io/drawing-board/",
    description: "Lizards are a widespread group of squamate reptiles...",
    srcCode:"",
  },
  {
    title: "Fit Fusion",
    link: "https://robinscripts.github.io/fit-fusion/",
    description: "Lizards are a widespread group of squamate reptiles...",
  },
  // Add more reptile objects as needed
];
function PortFolio() {
  return (
    <section id="portfolio">
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <SectionHeader color="black" text="My Recent Works" />

        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <IFrame link={project.link} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography> */}
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="small" href={project.link} target="blank">Live Demo</Button>
                <Button size="small" href={project.srcCode} target="blank">Source Code</Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      </Container>
    </section>
  );
}

export default PortFolio;
