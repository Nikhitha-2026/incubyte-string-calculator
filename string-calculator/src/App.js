import React, { useState } from "react";
import add from "./AddCalculator";
import InputBox from "./InputBox";
import ResultDisplay from "./ResultDisplay";
import { Button, Container, Box, Typography } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = add(input);
      setResult(calculatedResult);
      setError("");
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          String Calculator
        </Typography>
        <InputBox input={input} onInputChange={handleInputChange} />
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            fullWidth
          >
            Calculate
          </Button>
        </Box>
        <ResultDisplay result={result} error={error} />
      </Box>
    </Container>
  );
}

export default App;
