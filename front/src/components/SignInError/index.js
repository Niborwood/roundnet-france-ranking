import React from 'react';

// MUI IMPORTS
import Alert from '@mui/material/Alert';

function SignInError() {
  return (
    <Alert severity="error">
      Une erreur dans le système d&apos;adminsitration est survenue.
      <br />
      <br />
      Merci de le notifier à :
      {' '}
      <br />
      <a href="mailto:support@roundnet-france.fr">support@roundnet-france.fr</a>
    </Alert>
  );
}

export default SignInError;
