import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';

// MUI ICONS IMPORTS
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

// FIREBASE IMPORTS
import { auth, registerLocal, signInWithGoogle } from '../../firebase';

function LogIn() {
  // Firebase Auth State & History Hooks
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  // Controlled inputs
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  //
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    console.log(user);
    // if (user) history.replace('/dashboard');
  }, [user, loading]);

  return (
    <>
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
      <Button
        type="submit"
        variant="contained"
        onClick={() => registerLocal(values.email, values.password)}
      >
        Se connecter
      </Button>

      {/* Google Log button */}
      <Button
        color="secondary"
        startIcon={<GoogleIcon />}
        type="button"
        variant="outlined"
        onClick={signInWithGoogle}
      >
        Se connecter avec Google
      </Button>

      <Divider />

      {/* Create account link */}
      <Typography variant="body2">
        <Link
          component={RouterLink}
          href="/rf-signup"
          to="/rf-signup"
          underline="hover"
        >
          Pas encore de compte
        </Link>
        {' '}
        |
        {' '}
        <Link
          component={RouterLink}
          href="/rf-pwd-forgotten"
          to="/rf-pwd-forgotten"
          underline="hover"
        >
          Mot de passe oublié ?
        </Link>
      </Typography>
    </>
  );
}

export default LogIn;
