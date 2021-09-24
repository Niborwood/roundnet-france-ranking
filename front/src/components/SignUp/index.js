import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';

// MUI ICONS IMPORTS
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignUp() {
  // Controlled inputs
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    club: '',
    showPassword: false,
  });

  // Example clubs
  const clubs = [
    { id: 1, name: 'Roundnet Paris' },
    { id: 2, name: 'Roundnet Lyon' },
    { id: 3, name: 'Roundnet Toulouse' },
    { id: 4, name: 'Roundnet Lille' },
    { id: 5, name: 'Roundnet Bordeaux' },
    { id: 5, name: 'Titans Roundnet' },
  ];

  return (
    <>
      {/* Email Input */}
      <TextField
        id="email-account"
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />

      {/* Name Input */}
      <TextField
        id="name-account"
        label="Nom &amp; Prénom"
        required
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />

      {/* Club Input */}
      <Autocomplete
        id="club-account"
        freeSolo
        options={clubs.map((club) => club.name)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => (<TextField {...params} label="Club" />)}
      />

      {/* Password input */}
      <TextField
        id="password-account"
        label="Mot de passe"
        required
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        InputProps={{
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

      {/* Password confirmation input */}
      <TextField
        id="password-account-confirm"
        label="Confirmer le mot de passe"
        required
        type={values.showPassword ? 'text' : 'password'}
        value={values.passwordConfirm}
        onChange={(e) => setValues({ ...values, passwordConfirm: e.target.value })}
        InputProps={{
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
      <Button type="submit" variant="contained">Créer un compte</Button>

      <Divider />

      {/* Create account link */}
      <Typography variant="body2">
        <Link
          component={RouterLink}
          to="/rf-admin"
          href="/rf-admin"
          underline="hover"
        >
          J&apos;ai déjà un compte
        </Link>
      </Typography>
    </>
  );
}

export default SignUp;
