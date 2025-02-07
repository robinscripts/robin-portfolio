import React from "react";
import { Container, Grid, Box, Stack, Button, Typography } from "@mui/material";
import HeroImage from "../../assets/images/heroCropped.png";
import theme from "../../styles/theme";

const styles = {
  container: {
    height:600,
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
  },
  leftColumn: {
    flex:5,
    display: "flex",
    height: "100%",
    justifyContent:"center",
    flexDirection: "column"
  },
  rightColumn: {
    flex:1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    height: "100%",
    width: "100%",
    padding: "20%",
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "90%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
  },
};

function Hero() {
  return (
    <section id="home">
      <Container disableGutters maxWidth="lg" sx={styles.container}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={styles.leftColumn}>
            <Typography
              component="h1"
              sx={{
                fontSize: "2rem",
                fontWeight: "bolder",
                lineHeight: 1,
              }}
              gutterBottom
            >
              Hello! I'm Robin Sharma
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: "#6d07f2",
                fontWeight: "bolder",
                fontSize: "3rem",
                lineHeight: 1.2,
              }}
              gutterBottom
            >
              Innovative Problem Solver & Full-Stack Architect
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              As a Software Engineer, I specialize in architecting robust
              full-stack solutions and innovating through complex
              problem-solving. With a passion for cutting-edge technologies, I'm
              dedicated to crafting seamless digital experiences that exceed
              expectations. Let's collaborate and bring your ideas to life!
            </Typography>
            <Stack spacing={2} direction="row">
              <Button variant="contained" aria-label="Hire Me">
                Hire Me
              </Button>
              <Button variant="outlined" aria-label="Get CV">
                Get CV
              </Button>
            </Stack>
          </Box>

          {/* Right Column */}
          <Box sx={styles.rightColumn}></Box>
        </Box>
      </Container>
    </section>
  );
}

export default Hero;

// deprecated
// const styles = {
//   container: {
//     height: 600,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   gridContainer: {
//     height: "100%",
//     width: "100%",
//     alignItems: "center",
//   },
//   leftColumn: {
//     textAlign: "left",
//   },
//   rightColumn: {
//     height: "100%",
//     width: "100%",
//     backgroundImage: `url(${HeroImage})`,
//     backgroundSize: "90%",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "right bottom",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// };
// function Hero() {
//   return (
//     <section id="home">
//       <Container disableGutters maxWidth="lg" sx={styles.container}>
//         <Grid container spacing={0} sx={styles.gridContainer}>
//           {/* Left Column */}
//           <Grid item xs={12} md={6}>
//             <Box sx={styles.leftColumn}>
//               <Typography
//                 component="h1"
//                 sx={{
//                   // color:"#5ae8b9",
//                   fontSize: "2rem",
//                   fontWeight: "bolder",
//                   lineHeight:1
//                 }}
//                 gutterBottom
//               >
//                 Hello! I'm Robin Sharma
//               </Typography>
//               <Typography
//                 component="h1"
//                 sx={{
//                   color: "#6d07f2",
//                   fontWeight: "bolder",
//                   fontSize: "3rem",
//                   lineHeight: 1.2,
//                 }}
//                 gutterBottom
//               >
//                 Innovative Problem Solver & Full-Stack Architect
//               </Typography>
//               <Typography variant="body1" color="textSecondary" paragraph>
//                 As a Software Engineer, I specialize in architecting robust
//                 full-stack solutions and innovating through complex
//                 problem-solving. With a passion for cutting-edge technologies,
//                 I'm dedicated to crafting seamless digital experiences that
//                 exceed expectations. Let's collaborate and bring your ideas to
//                 life!
//               </Typography>
//               <Stack spacing={2} direction="row">
//                 <Button variant="contained" aria-label="Hire Me">
//                   Hire Me
//                 </Button>
//                 <Button variant="outlined" aria-label="Get CV">
//                   Get CV
//                 </Button>
//               </Stack>
//             </Box>
//           </Grid>

//           {/* Right Column */}
//           <Grid item xs={12} md={6} sx={styles.rightColumn}></Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// }
