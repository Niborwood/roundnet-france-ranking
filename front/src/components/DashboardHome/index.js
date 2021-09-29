import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';

// MUI IMPORTS
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';

// MUI ICON IMPORTS
import AddIcon from '@mui/icons-material/Add';

// COMPOSANTS IMPORS
import TournamentTable from './TournamentTable';

function DashboardHome() {
  const history = useHistory();
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}

        {/* Recent TournamentTable */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <TournamentTable title="Mes Tournois" />
          </Paper>
        </Grid>
      </Grid>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={() => {
          history.replace('/rf-add-tournament');
        }}
        sx={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        <Link
          component={RouterLink}
          href="/rf-add-tournament"
          to="/rf-add-tournament"
          underline="hover"
          color="white"
        >
          Ajouter un tournoi
        </Link>
      </Fab>
    </>
  );
}

export default DashboardHome;
