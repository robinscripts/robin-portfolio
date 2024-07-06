import { Box } from "@mui/material";
import React from "react";

function IFrame({ link }) {
  return (
    <Box sx={{
        height:300,
        width:"100%"
    }}>
        <iframe scrollingX="no"
          src={link}
          style={{ width: "100%", height: "100%", transform: "scale(1)" }}
        ></iframe>
    </Box>
        
  );
}

export default IFrame;
