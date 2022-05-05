import React from 'react'
import RemainingTime from './RemainingTime'
import RemainingDay from './RemainingDay'
import { Box, Paper } from '@mui/material'

const Lifetracker = () => {
  return (
    <Box sx={{alignItems: 'center'}}>

    <Paper sx={{pb: 5, pt: 2, mt: 4, pl: 5, textAlign: 'center'}} elevation={0} variant='outlined'>
      <h2 style={{textAlign: 'center'}}>"Time is money", right?</h2> 
      <RemainingDay/>
      <RemainingTime/>
    </Paper>
    </Box>
    
  )
}

export default Lifetracker