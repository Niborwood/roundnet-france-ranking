import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function SignIn() {
  return (

    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100vw',
        minHeight: '50vh',
      }}
    >
      <Typography variant="h6" sx={{ mb: 4 }}>Administration / Se connecter</Typography>
      <Paper variant="outlined" sx={{ p: 4 }} />
    </Stack>
  );
}

export default SignIn;
