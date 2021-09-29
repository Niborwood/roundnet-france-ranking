import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI IMPORTS
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// COMPOSANTS IMPORTS
import ClubInput from '../ClubInput';

function TournamentDetails({
  values,
  errors,
  initialValues,
  setValues,
  setErrors,
  setDetailsStep,
}) {
  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Ajouter un tournoi
      </Typography>
      <Paper sx={{ p: 4 }}>
        <FormControl fullWidth>
          <Stack direction="column" spacing={2}>
            {/* TOURNAMENT NAME */}
            <TextField
              error={errors.name !== ''}
              helperText={errors.name}
              id="tournament-name"
              label="Nom du tournoi"
              required
              value={values.name}
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
                setErrors({ ...errors, name: '' });
              }}
            />

            {/* PLACE */}
            <TextField
              error={errors.place !== ''}
              helperText={errors.place}
              id="tournament-place"
              label="Lieu"
              required
              value={values.place}
              onChange={(e) => {
                setValues({ ...values, place: e.target.value });
                setErrors({ ...errors, place: '' });
              }}
            />

            {/* CLUB */}
            <ClubInput
              errors={errors}
              setErrors={setErrors}
              values={values}
              setValues={setValues}
              label="Club organisateur"
            />

            {/* PARTICIPANTS */}
            <TextField
              error={errors.participants !== ''}
              helperText={errors.participants !== '' ? errors.participants : 'Nombre total de joueurs, incluant les personnes absentes'}
              id="tournament-participants"
              label="Participants"
              required
              value={values.participants}
              onChange={(e) => {
                setValues({ ...values, participants: e.target.value });
                setErrors({ ...errors, participants: '' });
              }}
            />
          </Stack>
        </FormControl>
        <Divider sx={{ my: 2 }} />
        <Stack direction="column" justifyContent="flex-end" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setDetailsStep(false);
            }}
          >
            Suivant
          </Button>
          <Button
            color="primary"
            component={Link}
            to="/rf-dashboard"
            onClick={() => {
              setErrors(initialValues);
              setValues(initialValues);
            }}
          >
            Annuler
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

TournamentDetails.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    place: PropTypes.string,
    club: PropTypes.string,
    participants: PropTypes.number,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    place: PropTypes.string,
    club: PropTypes.string,
    participants: PropTypes.number,
  }).isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    place: PropTypes.string,
    club: PropTypes.string,
    participants: PropTypes.number,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setDetailsStep: PropTypes.func.isRequired,
};

export default TournamentDetails;
