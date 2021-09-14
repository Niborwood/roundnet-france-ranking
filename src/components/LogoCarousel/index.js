import React from 'react';

import Slider from 'react-slick';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// IMPORT IMAGES
import logoFrance from '../../assets/images/logos/roundnet-france.jpg';
import logoCoc from '../../assets/images/logos/roundnet-coc.jpg';
import logoLyon from '../../assets/images/logos/roundnet-lyon.jpg';
import logoParis from '../../assets/images/logos/roundnet-paris.jpg';
import logoToulouse from '../../assets/images/logos/roundnet-toulouse.jpg';
import logoAbbeville from '../../assets/images/logos/spikebees.jpg';
import logoNantes from '../../assets/images/logos/titans-roundnet.jpg';

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
  {
    src: logoParis,
    alt: 'Roundnet Paris',
  },
  {
    src: logoToulouse,
    alt: 'Roundnet Toulouse',
  },
  {
    src: logoAbbeville,
    alt: 'Roundnet Abbeville - Spikebees',
  },
  {
    src: logoNantes,
    alt: 'Roundnet Nantes - Titans Roundnet',
  },
];

function LogoCarousel() {
  const logos = rawLogos.map((logo) => (
    <Box key={logo.alt}>
      <img src={logo.src} alt={logo.alt} title={logo.alt} style={{ width: '150px' }} />
    </Box>
  ));
  return (
    <Container
      maxWidth="md"
      sx={{
        mb: 6,
      }}
    >
      <Box mb={2}>
        <Typography align="center" variant="h5" component="h2"> Application officielle du roundnet français </Typography>
      </Box>
      <Slider
        dots
        arrows={false}
        autoplay
        infinite
        speed={800}
        slidesToShow={4}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              centerMode: false,
            },
          },
        ]}
      >
        {logos}

      </Slider>
    </Container>
  );
}

export default LogoCarousel;
