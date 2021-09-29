/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// MUI IMPORTS
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useQuery, gql } from '@apollo/client';

function ClubInput({
  values, setValues, errors, setErrors, label,
}) {
  // Controlled input and value
  const filter = createFilterOptions();
  const value = values.club;

  // Query to get clubs
  const GET_CLUBS = gql`
    query GetClubs {
      clubs {
        name
      }
    }
  `;
  const { data, loading, error: queryError } = useQuery(GET_CLUBS);
  const clubs = data?.clubs;

  return (
    queryError ? (
      <div>Un problème est survenu dans la récupération des clubs.</div>
    ) : (
      <Autocomplete
        id="club-account"
        value={value}
        onChange={(event, newValue) => {
          if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setErrors({ ...errors, club: '' });
            setValues({
              ...values,
              club: newValue.inputValue,
            });
          } else {
            setErrors({ ...errors, club: '' });
            setValues({ ...values, club: newValue?.name || '' });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              name: `Ajouter le club "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={clubs || []}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={
          (props, option) => (
            <li {...props}>{loading ? 'Chargement...' : option.name}</li>)
        }
        freeSolo
        renderInput={(params) => (
          <TextField
            error={errors.club !== ''}
            helperText={errors.club}
            {...params}
            label={label}
            required
          />
        )}
      />
    )
  );
}

ClubInput.propTypes = {
  label: PropTypes.string,
  values: PropTypes.shape({
    club: PropTypes.string,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    club: PropTypes.string,
  }).isRequired,
  setErrors: PropTypes.func.isRequired,
};

ClubInput.defaultProps = {
  label: 'Club',
};

export default ClubInput;
