import * as React from 'react';
import {Box, Typography, Container, Link} from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {'Copyright © '}
      <Link color="inherit" >
        Julian Mohr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? '#212C3F'
              : theme.palette.grey[800],
        
        color: (theme) =>
            theme.palette.mode === 'light'
              ? 'white'
              : 'white',
       } }
        
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}