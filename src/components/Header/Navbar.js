import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar, Typography, Container, Button, Switch} from '@mui/material';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';




const Navbar = ({colorMode, mode}) => {

const pages = ['Me', 'Blog', 'Books'];
 

  return (
    
      <AppBar
            position="fixed"
            sx={{
              backgroundColor: (theme) => theme.palette.mode === 'light' ? '#212C3F' : theme.palette.grey[800],
              boxShadow: '0px 0px 0px 0px',
              color: (theme) => theme.palette.mode === 'light' ? 'white' : 'white',
             }}>
       <Container maxWidth='lg'>
          <Toolbar disableGutters sx={{
              borderBottom: '1px solid',
              borderColor: 'rgba(0, 0, 0, 0.12)'
              }}>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <SwipeableTemporaryDrawer pages={pages} colorMode={colorMode} mode={mode}/>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: {xs: 1, md:0},
                mr:{xs: 0, md:2},
                display: { xs: 'flex'},
                ml: { md: '15px'},
                fontWeight: 'bold'
                
                }}
            >
              JM
            </Typography>

            
            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
              {pages.map((page) => (
                <Button 
                  color='inherit'
                  key={page}
                  
                  sx={{ my: 2, display: 'block' , mr:  '20px'}}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Switch onClick={colorMode.toggleMode} checked={mode==='dark'? true: false} />
            {mode==='light'? <LightModeIcon sx={{ mr:{xs: 0, md:2}}}/> :<DarkModeIcon/>}
          </Toolbar>       
        </Container>
      </AppBar>

   
  )
}

export default Navbar