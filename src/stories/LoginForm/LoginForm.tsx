import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import InputField from '../InputField/InputField.tsx';     
import PasswordField from '../PasswordField/PasswordField.tsx'; 
import SubmitButton from '../SubmitButton/SubmitButton.tsx';

const LoginForm = ({ onSubmit }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit({ email, password });
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto' }}
    >
      <Typography variant="h5" component="h1" textAlign="center">
        Login
      </Typography>

      <InputField
        label="Email"
        value={email}
        onChange={(e : any) => setEmail(e.target.value)}
        type="email"
        required
      />

      <PasswordField
        label="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        required
      />

      <SubmitButton type="submit">
        Login
      </SubmitButton>
    </Box>
  );
};

export default LoginForm;