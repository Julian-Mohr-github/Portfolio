import React , { useState}  from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListItemButton from '@mui/material/ListItemButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function SwipeableTemporaryDrawer({pages, colorMode, mode}) {

  

  const [open, setOpen] = useState(false)



  const toggleDrawer = (change) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(change);
  };

 
  const list = () => (
    <Box
      sx={{ width: 260}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} sx={{pl: '11px'}}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItemButton onClick={colorMode.toggleMode} >
            <ListItemIcon>
               {mode==='light'?<LightModeIcon/>:<DarkModeIcon/>}
            </ListItemIcon>

          </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer(true)} color='inherit'>
            <MenuIcon/>
          </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          
          >
            {list()}
            
          </SwipeableDrawer>
        </React.Fragment>
      
    </>
  );
}
