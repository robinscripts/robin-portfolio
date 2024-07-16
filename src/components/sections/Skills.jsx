import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  ListItem,
} from "@mui/material";
import SectionHeader from "./SectionComponents/SectionHeader";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import theme from "../../styles/theme";

const frontend = [
  "Reactjs",
  "JavaScript",
  "jQuery",
  "Context API",
  "Redux",
  "React-Router",
  "HTML",
  "CSS",
  "Material UI",
  "Tailwind",
  "Bootstrap",
];
const backend = [
  "PHP",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Axios",
  "SQL",
  "PostgreSQL",
  "REST APIs",
];
const others = ["C++", "Debugging", "API Integration","VScode", "Git & GitHub", "PostMan"];
// const others = {
//   "Dev Tools": ["VScode", "Git & GitHub", "PostMan"],
//   "Other works I offer": ["C++", "Debugging", "API Integration"],
// };

function Skills() {
  return (
    <section id="skills">
      <Container disableGutters maxWidth="xl">
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            height: 450,
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
              // padding: "0 12%",
              fontSize: "1.3em",
              // fontWeight: "bolder",
              lineHeight: 1.2,
            }}
          >
            Cutting-edge tech is my playground, where I build flawless digital
            experiences. As a passionate problem-solver, I'm constantly learning
            and pushing boundaries to craft the best solutions. Whether it's a
            complex challenge or a fresh idea, I'm eager to dive in and make it
            a reality. Have a look or explore the technologies/tools I use to
            bring your vision to life!
          </Typography>
        </Container>
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            display: "flex",
            marginTop: "-100px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          {/* frontend */}
          <Box sx={{ flex: 1, textAlign: "center", height: 656 }}>
            <Card variant="outlined" sx={{ padding: "45px" }}>
              <CardContent>
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: "50%",
                    width: 90,
                    height: 90,
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhonelinkIcon sx={{ fontSize: 48 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ paddingY: "25px", fontWeight: "bold" }}
                >
                  Frontend Development
                </Typography>

                <List
                  disablePadding
                  sx={{
                    width: "100%",
                    margin: "auto",
                  }}
                  component="ul"
                >
                  {frontend.map((skill) => (
                    <>
                      <ListItem
                        disablePadding
                        sx={{ color: "primary.main", textAlign: "center" }}
                      >
                        <ListItemText primary={skill} />
                      </ListItem>
                    </>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>

          {/* backend */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Card variant="outlined" sx={{ padding: "45px", height: "100%" }}>
              <CardContent>
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: "50%",
                    width: 90,
                    height: 90,
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DnsOutlinedIcon sx={{ fontSize: 48 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ paddingY: "25px", fontWeight: "bold" }}
                >
                  Bacekend Development
                </Typography>

                <List
                  disablePadding
                  sx={{
                    width: "100%",
                    margin: "auto",
                  }}
                  component="ul"
                >
                  {backend.map((skill) => (
                    <>
                      <ListItem
                        disablePadding
                        sx={{ color: "primary.main", textAlign: "center" }}
                      >
                        <ListItemText primary={skill} />
                      </ListItem>
                    </>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>

          {/* others */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Card variant="outlined" sx={{ padding: "45px", height: "100%" }}>
              <CardContent>
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: "50%",
                    width: 90,
                    height: 90,
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <DnsOutlinedIcon sx={{ fontSize: 48 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ paddingY: "25px", fontWeight: "bold" }}
                >
                  Extra's I am Fond of
                </Typography>

                <List
                  disablePadding
                  sx={{
                    width: "100%",
                    margin: "auto",
                  }}
                  component="ul"
                >
                  {others.map((skill) => (
                    <>
                      <ListItem
                        disablePadding
                        sx={{ color: "primary.main", textAlign: "center" }}
                      >
                        <ListItemText primary={skill} />
                      </ListItem>
                    </>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Container>
    </section>
  );
}

export default Skills;

// deprecated
{
  /* <Paper elevation={4} sx={{borderRadius:1}}>
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
          </Paper> */
}
