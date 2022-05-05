import React, { useEffect, useState } from 'react'
import { ageCalculation } from './TimeCalculations';
import {TextField, Stack} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import deLocale from 'date-fns/locale/de';
import {daysUntilYouDie} from './TimeCalculations';


const RemainingTime = () => {

const [birthdate, setBirthdate]= useState('');
const [age, setAge]= useState('');
const [countdown, setCountdown] = useState([""]);



  //first time setting countdown, when obtaining birthdate
  useEffect(()=>{
    if(birthdate !== ''){
        setCountdown(daysUntilYouDie(birthdate,age))
      }
    },[birthdate]);

 
    //updating countdown after first mount
  useEffect(()=>{
    if(birthdate !== ''){
    let secTimer =setInterval(()=>{
        setCountdown(daysUntilYouDie(birthdate,age))
      },1000)
      return () => clearInterval(secTimer);}
    },[countdown]);


useEffect(()=>{
    if(birthdate != null){
        setAge(ageCalculation(birthdate))
        }  
    },[birthdate]);
  


  return (
    < >
    <h2 style={{paddingTop: '20px'}}>
        But you probably think: "who cares? I get it everyday?""
    </h2>
    
   
    <p>Yes but statistically just 83 years... {/*birthdate ===''? "": age*/} </p>
    <p>Living in the moment, it's a gift. That's why they call it the present.</p>
    <p>Try to find out, how much time is left till you statistically die?</p>
        

     <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
  
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          mask={'__.__.____'}
          label="Tell me your birthday?"
          openTo="year"
          value={birthdate === ''? null : birthdate}
          onChange={(newValue) => {
            setBirthdate(newValue);
          }}
          renderInput={(params) => <TextField {...params}  sx={{maxWidth: '450px', margin: '0 auto'}}/>}
        />
      </Stack>
    </LocalizationProvider>
   
    <div>
        <h4 style={{textAlign: 'center'}}> {birthdate !== ''? (countdown[0] + "d " + countdown[1] + "h " + countdown[2] + "m " + countdown[3] + "s "):''}</h4>
        {/*<p>Remaining till next birthday: {birthdate ==="" ? '':daysUntilNextBday(birthdate)}</p>*/}
    </div>   

    </> 
  )
}

export default RemainingTime