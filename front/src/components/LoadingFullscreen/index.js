import React from 'react';

// MUI IMPORTS
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// IMAGE IMPORTS
import logoFrance from '../../assets/images/logos/roundnet-france-tp-blanc.png';

function LoadingFullscreen() {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
      transitionDuration={300}
    >
      <img src={logoFrance} alt="Logo Roundnet Paris" width="100px" />
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingFullscreen;
