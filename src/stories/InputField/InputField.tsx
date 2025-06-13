import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, value, onChange, type = 'text', name, error, helperText, ...rest }: any) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      error={error}
      helperText={helperText}
      variant="outlined"
      margin="normal"
      {...rest}
    />
  );
};

export default InputField;