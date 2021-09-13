import React from 'react';

// MATERIAL COMPONENTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// OUTER COMPONENTS
import MenuDrawer from '../MenuDrawer';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Roundnet France Ranking
          </Typography>
          <ButtonGroup variant="text" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button href="#qui-sommes-nous" color="inherit">Qui sommes-nous</Button>
            <Button href="#methodologie" color="inherit">Méthodologie</Button>
            <Button href="#classement" color="inherit">Classement</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
