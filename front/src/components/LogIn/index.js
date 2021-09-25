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
import Alert from '@mui/material/Alert';

// MUI ICONS IMPORTS
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

// FIREBASE IMPORTS
import { auth, signInLocal, signInWithGoogle } from '../../utils/firebase';

function LogIn() {
  // Firebase Auth State & History Hooks
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    // If error, redirect to general error page
    if (error) {
      history.push('/rf-error');
    }

    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    console.log(user);
    // if (user) history.replace('/rf-dashboard');
  }, [user, loading]);

  // Controlled inputs
  const [values, setValues] = useState({
    global: '',
    email: '',
    password: '',
    showPassword: false,
  });

  // Data validation & error handling
  const initialErrors = {
    global: '',
    email: '',
    password: '',
  };
  const [errors, setErrors] = useState(initialErrors);

  return (
    <>

      {/* Email Input */}
      <TextField
        id="email"
        error={errors.email !== ''}
        helperText={errors.email}
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={(e) => {
          setValues({ ...values, email: e.target.value });
          setErrors({ ...errors, email: '', global: '' });
        }}
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
        error={errors.password !== ''}
        helperText={errors.password}
        label="Mot de passe"
        required
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={(e) => {
          setValues({ ...values, password: e.target.value });
          setErrors({ ...errors, password: '', global: '' });
        }}
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

      {/* Error alerts */}
      {errors.global !== '' && (
      <Alert severity="error">{errors.global}</Alert>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        onClick={() => signInLocal(setErrors, errors, values)}
      >
        Se connecter
      </Button>

      {/* Google Log button */}
      <Button
        color="secondary"
        startIcon={<GoogleIcon />}
        type="button"
        variant="outlined"
        onClick={() => signInWithGoogle(setErrors, errors)}
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
