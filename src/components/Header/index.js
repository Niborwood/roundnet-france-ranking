import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL COMPONENTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

// OUTER COMPONENTS
import MenuDrawer from '../MenuDrawer';

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function Header(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HideOnScroll {...props}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <MenuDrawer />
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Roundnet France Ranking
            </Typography>
            <ButtonGroup variant="text" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button href="#who-are-we" color="inherit">Qui sommes-nous</Button>
              <Button href="#methods" color="inherit">Méthodologie</Button>
              <Button href="#classement" color="inherit">Classement</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

export default Header;
