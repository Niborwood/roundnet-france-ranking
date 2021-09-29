import React from 'react';
import PropTypes from 'prop-types';

// MUI IMPORTS
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

// MUI ICONS IMPORTS

function SignInWrapper({ children, title }) {
  return (
    <Box sx={{
      height: '100vh',
      backgroundColor: '#fafafa',
    }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100vw',
          pt: 8,
        }}
      >
        <Container maxWidth="xs">
          <Typography variant="h6" sx={{ mb: 1 }}>
            Administration /
            {' '}
            {title}
          </Typography>
          <Paper variant="outlined" sx={{ p: 4 }}>
            <FormControl fullWidth>
              <Stack direction="column" spacing={2}>
                {children}
              </Stack>
            </FormControl>
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}

SignInWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SignInWrapper;
