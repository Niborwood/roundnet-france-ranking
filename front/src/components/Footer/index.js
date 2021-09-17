import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import logoFrance from '../../assets/images/logos/roundnet-france-tp-blanc.png';
import logoCoc from '../../assets/images/logos/eusra.png';
import logoLyon from '../../assets/images/logos/sra.png';

function Footer() {
  const rawLogos = [
    {
      src: logoFrance,
      alt: 'Roundnet France',
    },
    {
      src: logoCoc,
      alt: 'Roundnet COC',
    },
    {
      src: logoLyon,
      alt: 'Roundnet Lyon',
    },
  ];

  return (
    <Box bgcolor="primary.dark" py={4}>
      <Container maxWidth="lg">
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
          <Box>
            <Typography variant="h6" color="white">
              Roundnet France
              {' '}
              <br />
              {' '}
              Ranking
            </Typography>
            <Typography variant="body2" color="white">
              <Link sx={{ color: 'white' }} href="mailto:contact@roundnetfrance.fr">contact@roundnetfrance.fr</Link>
            </Typography>
          </Box>
          <Box>
            {rawLogos.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                height="80px"
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
