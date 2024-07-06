import React from "react";
import { Typography } from "@mui/material";

function SectionHeader({ color, text }) {
  return (
    <Typography
      maxWidth="lg"
      variant="h3"
      color={color}
      sx={{
        marginX: "auto",
        paddingTop:13,
        paddingBottom: 5,
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
}

export default SectionHeader;
