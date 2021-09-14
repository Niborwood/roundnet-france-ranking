import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

// MATERIAL UI ICONS
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

function WhoAreWe() {
  return (
    <Container maxWidth="sm">
      <Paper
        id="who-are-we"
        sx={{
          margin: '0 auto',
          position: 'relative',
          top: '-4rem',
          padding: '2rem',
        }}
      >
        <Box textAlign="center">
          <SupervisedUserCircleIcon color="primary" fontSize="large" />
        </Box>
        <Box mb={3}>
          <Typography align="center" variant="h4">
            {' '}
            Qu&apos;est-ce que
            {' '}
            <br />
            {' '}
            Roundnet France Ranking ?
            {' '}
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Stack spacing={2} mt={4}>
          <Typography align="center" variant="body1" component="div">
            Le classement officiel de roundnet est créé et géré par Roundnet France.
            Il permet d&apos;agréger les différents résultats officiels des joueurs et
            constitue la base pour le seeding des tournois officiels.
          </Typography>
          <Typography align="center" variant="body1" component="div">
            Il sert de seeding pour les championnats de France
            et les différents tournois français.
            Enfin, il sert à structurer notre communauté,
            et à la motiver pour participer à un maximum de tournois !
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default WhoAreWe;
