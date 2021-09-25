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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// FIREBASE AUTH IMPORT
import { auth, registerLocal } from '../../utils/firebase';
import errorTexts from '../../utils/errorTexts';

// COMPONENTS IMPORTS
import ClubInput from '../ClubInput';

function SignUp() {
  // Firebase Auth
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  // Redirections and global errors
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
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    club: '',
    showPassword: false,
  });

  // Data Validation & Error Handling
  const [errors, setErrors] = useState({
    global: '',
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    club: '',
  });

  return (
    <>
      {/* Email Input */}
      <TextField
        error={errors.email !== ''}
        helperText={errors.email}
        id="email-account"
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={(e) => {
          setValues({ ...values, email: e.target.value });
          setErrors({ ...errors, email: '' });
        }}
      />

      {/* Name Input */}
      <TextField
        error={errors.name !== ''}
        helperText={errors.name}
        id="name-account"
        label="Nom &amp; Prénom"
        required
        value={values.name}
        onChange={(e) => {
          setValues({ ...values, name: e.target.value });
          setErrors({ ...errors, name: '' });
        }}
      />

      {/* Club Input */}
      <ClubInput errors={errors} setErrors={setErrors} values={values} setValues={setValues} />

      {/* Password input */}
      <TextField
        error={errors.password !== ''}
        helperText={errors.password}
        id="password-account"
        label="Mot de passe"
        required
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={(e) => {
          setValues({ ...values, password: e.target.value });
          setErrors({ ...errors, password: '', passwordConfirm: '' });
        }}
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
        error={errors.passwordConfirm !== ''}
        helperText={errors.passwordConfirm}
        id="password-account-confirm"
        label="Confirmer le mot de passe"
        required
        type={values.showPassword ? 'text' : 'password'}
        value={values.passwordConfirm}
        onChange={(e) => {
          setValues({ ...values, passwordConfirm: e.target.value });
          setErrors({ ...errors, password: '', passwordConfirm: '' });
        }}
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
      <Button
        onClick={() => registerLocal(setErrors, errors, values)}
        variant="contained"
      >
        Créer un compte

      </Button>

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
