import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';

function MenuDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const list = () => (
    <>
      <Typography variant="h5" gutterBottom sx={{ mt: 2, ml: 2 }}>Roundnet France Ranking</Typography>
      <List sx={{ p: 2, width: { xs: '75vw', sm: '50vw' } }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SupervisedUserCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Qui sommes-nous" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Méthodologie" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Classement" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default MenuDrawer;
