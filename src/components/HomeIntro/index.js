import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        // position: 'absolute',
        // top: '0',
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
          <Stack width="fit-content" direction="row" spacing={2}>
            <Button size="large" variant="contained">Notre méthodologie</Button>
            <Button color="secondary" size="large" variant="contained">Consulter le classement</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeIntro;