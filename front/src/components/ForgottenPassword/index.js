import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

// MUI ICONS IMPORTS
import AccountCircle from '@mui/icons-material/AccountCircle';

// FIREBASE IMPORTS
import { auth, sendPasswordReset } from '../../utils/firebase';

function ForgottenPassword() {
  // Firebase auth
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    // If general error, redirect to general error page
    if (error) {
      history.push('/rf-error');
    }

    if (loading) {
      // maybe trigger a loading screen
    }
    // if (user) history.replace('/rf-dashboard');
  }, [user, loading]);

  // Controlled inputs
  const [values, setValues] = useState({
    email: '',
  });

  // Data validation & error handling
  const [errors, setErrors] = useState({
    global: '',
    email: '',
  });
  const [emailSent, setEmailSent] = useState(false);

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
          setErrors({ ...errors, email: '' });
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      {/* Validation Alert */}
      {emailSent && (
        <Alert severity="success">
          Un email de réinitialisation a bien été envoyé à l&apos;adresse
          {' '}
          <strong>{values.email}</strong>
          .

        </Alert>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        onClick={() => sendPasswordReset(setEmailSent, setErrors, errors, values.email)}
      >
        M&apos;envoyer un email de récupération
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
          Retour à l&apos;administration
        </Link>
      </Typography>
    </>
  );
}

export default ForgottenPassword;
