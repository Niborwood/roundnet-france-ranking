/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

// MUI IMPORTS
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useQuery, gql } from '@apollo/client';

function ClubInput() {
  // Controlled input and value
  const [value, setValue] = useState(null);
  const filter = createFilterOptions();

  // Query to get clubs
  const GET_CLUBS = gql`
    query GetClubs {
      clubs {
        name
      }
    }
  `;
  const { data, loading } = useQuery(GET_CLUBS);
  const clubs = data?.clubs;

  return (
    loading ? null : (
      <Autocomplete
        id="club-account"
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
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
        options={clubs}
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
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        sx={{ width: '100%', height: '100%' }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Club" />
        )}
      />
    )
  );
}

export default ClubInput;
