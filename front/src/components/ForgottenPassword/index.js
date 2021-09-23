import React, { useState } from 'react';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

// MUI ICONS IMPORTS
import AccountCircle from '@mui/icons-material/AccountCircle';

function ForgottenPassword() {
  // Controlled inputs
  const [values, setValues] = useState({
    email: '',
  });

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

      {/* Submit button */}
      <Button type="submit" variant="contained">M&apos;envoyer un email de récupération</Button>

      <Divider />

      {/* Create account link */}
      <Typography variant="body2">
        <Link
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
