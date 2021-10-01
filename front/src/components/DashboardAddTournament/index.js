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
    date: '',
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [playersValues, setPlayersValues] = useState([]);

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
          playersValues={playersValues}
          setPlayersValues={setPlayersValues}
          participants={parseInt(values.participants, 10)}
        />
      )
  );
}

export default DashboardAddTournament;