import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// MATERIAL ICONS
import EqualizerIcon from '@mui/icons-material/Equalizer';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

// IMAGES IMPORT
import homeSlide from '../../assets/images/home-slide.jpg';

function HomeIntro() {
  const styles = {
    container: {
      backgroundImage: `url(${homeSlide})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    title: {
      textShadow: 'black 3px 2px 3px',
    },
  };
  return (
    <Box
      style={styles.container}
      sx={{
        bgcolor: 'primary.dark',
        height: '70vh',
        width: '100%',
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Stack justifyContent="center" minHeight="100%" spacing={1}>
          <Typography
            style={styles.title}
            pt={4}
            variant="h4"
            component="h2"
            color="primary.contrastText"
            lineHeight="1.5em"
            letterSpacing="0.03em"
          >
            Le classement individuel
            {' '}
            <br />
            officiel du roundnet français
            {' '}
            <br />
          </Typography>
          <Stack
            width="fit-content"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button sx={{ justifyContent: 'flex-start' }} href="#methods" size="large" variant="contained">
              <QueryStatsIcon sx={{ mr: 2 }} />
              Notre méthodologie
            </Button>
            <Button sx={{ justifyContent: 'flex-start' }} href="#ranking" color="secondary" size="large" variant="contained">
              <EqualizerIcon sx={{ mr: 2 }} />
              Consulter le classement
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeIntro;
