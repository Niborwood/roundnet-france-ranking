import React, { useState } from 'react';

// MUI IMPORTS
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';

// MUI ICONS IMPORTS
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignIn() {
  // Controlled inputs
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

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
          height: '50vh',
        }}
      >
        <Container maxWidth="xs">
          <Typography variant="h6" sx={{ mb: 1 }}>Administration / Se connecter</Typography>
          <Paper variant="outlined" sx={{ p: 4 }}>
            <FormControl fullWidth>
              <Stack direction="column" spacing={2}>

                {/* Email Input */}
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  required
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Password input */}
                <TextField
                  id="password"
                  label="Mot de passe"
                  required
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => setValues({ ...values, showPassword: !values.showPassword })}
                      >
                        {values.showPassword
                          ? <Visibility /> : <VisibilityOff />}
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Submit button */}
                <Button type="submit" variant="contained">Se connecter</Button>

                {/* Create account link */}
                <Typography variant="body2">
                  <Link
                    href="/rf-signup"
                    underline="hover"
                  >
                    Pas encore de compte
                  </Link>
                  {' '}
                  |
                  {' '}
                  <Link href="/rf-pwd-forgotten" underline="hover">
                    Mot de passe oublié ?
                  </Link>
                </Typography>

              </Stack>
            </FormControl>
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}

export default SignIn;
