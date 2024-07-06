import React, { useState } from "react";
import SectionHeader from "./SectionComponents/SectionHeader";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material/";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
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
          text="Let's get in touch and discuss the job"
        />
        <Container disableGutters maxWidth="lg" sx={{ marginX: "auto", paddingBottom:10 }}>
          <Paper elevation={4} sx={{ padding: 10 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                variant="standard"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                variant="standard"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                variant="standard"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                variant="standard"
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
            </form>
          </Paper>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
