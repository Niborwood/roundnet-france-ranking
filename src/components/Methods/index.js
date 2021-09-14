import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

// MATERIAL ICONS
import QueryStatsIcon from '@mui/icons-material/QueryStats';

function Methods() {
  return (
    <div id="methods">
      <Box sx={{
        mb: -1,
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f50057" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,234.7C480,245,600,203,720,192C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
      </Box>
      <Box sx={{
        background: 'linear-gradient(180deg, rgba(245,0,87,1) 0%, rgba(171,0,60,1) 100%);',
      }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <QueryStatsIcon color="disabled" sx={{ fontSize: 80 }} />
          </Box>
          <Typography mb={8} align="center" color="white" variant="h4" component="h2">Méthodologie &amp; Critères</Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'center', sm: 'stretch' }}
            justifyContent="space-around"
            spacing={2}
            sx={{ p: 4 }}
          >

            <Paper sx={{ p: 2, width: '100%' }}>
              <Typography mb={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Inspiré de l&apos;EURA</Typography>
              <Divider color="primary.dark" />
              <Stack spacing={2} mt={4}>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
              </Stack>
            </Paper>

            <Paper sx={{ p: 2, width: '100%' }}>
              <Typography mb={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Nourri de vos tournois</Typography>
              <Divider color="primary.dark" />
              <Stack spacing={2} mt={4}>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
              </Stack>
            </Paper>

            <Paper sx={{ p: 2, width: '100%' }}>
              <Typography mb={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Référent pour la compétition</Typography>
              <Divider color="primary.dark" />
              <Stack spacing={2} mt={4}>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
              </Stack>
            </Paper>

            <Paper sx={{ p: 2, width: '100%' }}>
              <Typography mb={2} variant="h5" component="h3" color="secondary.main" fontWeight="bold">Pensé pour tou.te.s</Typography>
              <Divider color="primary.dark" />
              <Stack spacing={2} mt={4}>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam ipsam eaque asperiores.
                  Repudiandae, id aliquam placeat sed quo assumenda similique?
                  Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Container>

      </Box>
    </div>
  );
}

export default Methods;
