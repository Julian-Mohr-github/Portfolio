import React from 'react';
import { Box,useScrollTrigger, Zoom, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default  function ScrollToTop() {
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
          block: 'center',
        });
    };
  
    return (
            <Zoom in={trigger}>
                <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                        <Fab color="default" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                </Box>
            </Zoom>
    );
  }
