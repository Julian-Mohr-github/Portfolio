import { Grid , Card, CardContent, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { todayInSeconds } from './TimeCalculations';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const RemainingDay = () => {
    const [time, setTime] = useState(new Date());
    const[dayInSeconds, setDayInSeconds] = useState(todayInSeconds());

    

    useEffect(()=>{
        let secTimer =setInterval(()=>{
        setTime(new Date());
        setDayInSeconds(prevRemaining => prevRemaining-1);
    },1000)
    return () => clearInterval(secTimer);},[]);

    return (
        <>
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
        >
            <Grid item xs={12}>
                <p style={{textAlign: 'center', lineHeight: '150%'}}>
               Imagine if you wake up with 84.600€ in your bank account <br/> &#128176; <br/> But everyday, at the end of the night it is gone! Whether you wasted or not <br/> &#128561;
                 <br/> Then the next day you get another 84.600€ <br/> &#128527; <br/>  You would probably do every thing in your power to spend it, don't you? <br/> &#128556; <br/> What if i tell you, you have 84.600 seconds every day! <br/> &#129300; <br/> <br/> So, why waste time? &#9203;
                </p>
            </Grid>
        <Grid item xs={5}>
            <Card variant="outlined" sx={{backgroundColor: '#424242'}}>
                <CardContent sx={{textAlign: 'center'}}>
                <Typography sx={{ fontSize: 16, color: 'white' }} component="h5" gutterBottom>
                Your bank account
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <Typography variant="h5" component="div"  sx={{color: '#9ACD32', pt: 1}}>
                                {dayInSeconds.toLocaleString('de-DE')}€
                            </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={{ color: '#fff', fontSize: 12}} >
                            {time.toLocaleTimeString()}
                        </Typography>
                        <ArrowRightAltIcon fontSize='large' sx={{color: 'white' }}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" sx={{color: '#F08080', pt: 1 }} >
                        {(dayInSeconds-84600).toLocaleString('de-DE')}€
                        </Typography>
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
    </Grid>
</Grid>
            
             </>
  )
}

export default RemainingDay