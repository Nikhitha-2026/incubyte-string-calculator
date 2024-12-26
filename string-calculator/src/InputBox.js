import React from "react";
import { TextField } from "@mui/material";

function InputBox({ input, onInputChange }) {
  return (
    <TextField
      label="Enter Numbers"
      multiline
      rows={4}
      variant="outlined"
      fullWidth
      value={input}
      onChange={onInputChange}
      placeholder="Enter numbers separated by commas or newlines"
    />
  );
}

export default InputBox;
