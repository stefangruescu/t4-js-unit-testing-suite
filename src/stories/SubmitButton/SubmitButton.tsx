import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ onClick, disabled, children }: any) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {children || 'Submit'}
    </Button>
  );
};

export default SubmitButton;