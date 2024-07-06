import React from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import SectionHeader from "./SectionComponents/SectionHeader";
import JavascriptIcon from '@mui/icons-material/Javascript';

const skills = {
  "Languages I speak": ["C++","JavaScript", "PHP"],
  "Frontend Development": [
    "jQuery",
    "Reactjs",
    "Context API",
    "Redux",
    "Redux Toolkit",
    "React-Router",
    "HTML",
    "CSS",
    "Material UI",
    "Tailwind",
    "Bootstrap",
    "DOM",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "Axios",
    "SQL",
    "PostgreSQL",
    "REST APIs",
  ],
  "Dev Tools":["VScode", "Git & GitHub", "PostMan"],
  "Other works I offer": ["Debugging", "API Integration"],
};
function Skills() {
  return (
    <section id="skills">
      <Container disableGutters maxWidth="xl">
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            height: 400,
            backgroundColor: "primary.main",
          }}
        >
          <SectionHeader color="white" text="My ToolBox" />
          <Typography
            maxWidth="lg"
            variant="body2"
            color="white"
            sx={{
              margin: "auto",
              textAlign: "center",
              padding: "0 12%",
            }}
          >
            {/* Digital architect by day, problem-solving ninja by night. */}
            {/* I thrive in the world of cutting-edge tech, where I obsess over crafting flawless digital experiences. Untangling complex challenges and building robust solutions are my jam, all while keeping my finger on the pulse of the latest and greatest advancements. But for me, the journey never ends - I'm always eager to explore new technologies and methodologies, constantly seeking ways to improve and push the boundaries of what's possible. My current tech stack reflects this passion, Have a look and explore the tools and technologies I leverage to bring your ideas to life: */}
            Cutting-edge tech is my playground, where I build flawless digital
            experiences. As a passionate problem-solver, I'm constantly learning
            and pushing boundaries to craft the best solutions. Whether it's a
            complex challenge or a fresh idea, I'm eager to dive in and make it
            a reality. Have a look or explore the technologies/tools I use to
            bring your vision to life!
            {/* Let's turn your ideas into stunning realities. Ready to collaborate and push the boundaries of what's possible? */}
          </Typography>
        </Container>
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            marginTop: "-100px",
            backgroundColor:"transparent"
          }}
        >
          <Paper elevation={4} sx={{borderRadius:1}}>
            <Grid container sx={{ padding: "2rem",gap:3 }}>
              {Object.keys(skills).map((category,index) => (
                <React.Fragment key={index}>
                  <Grid
                  
                    item
                    xs={2.5}
                    sx={{
                      borderRight: "2px solid grey",
                    }}
                  >
                    {category}
                  </Grid>
                  <Grid item xs={9}>
                    {skills[category].join(`, `)}
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Container>
    </section>
  );
}

export default Skills;
