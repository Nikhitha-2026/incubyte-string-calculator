import React from "react";
import { Typography, Box } from "@mui/material";

function ResultDisplay({ result, error }) {
  return (
    <Box mt={2}>
      {result !== null && (
        <Typography variant="h5" color="primary">
          Result: {result}
        </Typography>
      )}
      {error && (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
}

export default ResultDisplay;
