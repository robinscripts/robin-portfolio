import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./styles/theme.js";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
