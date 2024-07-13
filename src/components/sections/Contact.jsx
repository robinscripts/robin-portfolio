import React, { useState } from "react";
import SectionHeader from "./SectionComponents/SectionHeader";
import { Container, TextField, Button, Box, Paper } from "@mui/material/";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: "#f7f7fc", marginTop: 10 }}
      >
        <SectionHeader
          color="black"
          text="Thanks for taking the time to reach out.How can I help you today?"
        />
        <Container
          disableGutters
          maxWidth="md"
          sx={{ marginX: "auto", paddingBottom: 10 }}
        >
          <Paper sx={{ padding: 5 }}>
            <Box component="form" onSubmit={handleSubmit} >
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap:"wrap"
              }}>
                <TextField
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{width:"48%"}}
                  required
                  />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{width:"48%"}}
                  required
                />
              </Box>

              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
