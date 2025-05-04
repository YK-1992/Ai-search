import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from "@mui/material";

import './style.css'

const StudyForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [level, setLevel] = useState("Очень просто");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question, level);
    }
  };

  return (
    <> 
      <form onSubmit={handleSubmit} className="container">
    
     <TextField   
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter a question...."
        className="border stile-textfield"
        required>

        </TextField>
      
  <FormControl fullWidth className="form-control">
        <InputLabel sx={{
          fontSize: '20px',
          fontWeight: '600',
          textShadow: "1px -1px 2px #f4f4f4",
          color:" #2482b0"
        }} 
         id="level-select-label">Select Search</InputLabel>
        <Select
          labelId="level-select-label"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          label="Select search"
        >
          <MenuItem value="It's very simple">It's very simple</MenuItem>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Global">Global</MenuItem>
        </Select>
      </FormControl>

      <Button sx={{
        width: '124px',
      }} variant="contained" type="submit">
      Explain
      </Button>
      
    
    
    </form>
 </>
  );
};

export default StudyForm;
