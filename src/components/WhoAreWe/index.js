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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quibusdam ipsam eaque asperiores.
            Repudiandae, id aliquam placeat sed quo assumenda similique?
            Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
          </Typography>
          <Typography align="center" variant="body1" component="div">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quibusdam ipsam eaque asperiores.
            Repudiandae, id aliquam placeat sed quo assumenda similique?
            Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default WhoAreWe;
