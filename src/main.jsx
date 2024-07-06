import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#6E07F3',
    },
    secondary: {
      main: '#5BE9B9',
    },
    transparent: {
      main: 'rgba(255, 255, 255, 0.12)',
    },
    fBlack:{
      main: "#28282B",
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
