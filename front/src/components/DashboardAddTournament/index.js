import React, { useState } from 'react';

// MUI IMPORTS

// COMPOSANTS IMPORTS
import TournamentDetails from './TournamentDetails';
import TournamentPlayers from './TournamentPlayers';

function DashboardAddTournament() {
  // State initiations
  const [detailsStep, setDetailsStep] = useState(true);
  const initialValues = {
    name: '',
    place: '',
    club: '',
    participants: '',
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  // FUNCTION RETURN
  return (
    detailsStep
      ? (
        <TournamentDetails
          values={values}
          errors={errors}
          initialValues={initialValues}
          setValues={setValues}
          setErrors={setErrors}
          setDetailsStep={setDetailsStep}
        />
      )
      : (
        <TournamentPlayers
          setDetailsStep={setDetailsStep}
        />
      )
  );
}

export default DashboardAddTournament;
