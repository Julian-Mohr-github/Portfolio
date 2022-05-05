import React, { useEffect, useState } from 'react';
import {daysUntilNextBday, daysUntilYouDie} from './TimeCalculations';

const AvgDeath = ({birthdate, age }) => {

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


  return (
    <div>
        <p>Remaining days till you statistically die with 83: {birthdate !== ''? (countdown[0] + "d " + countdown[1] + "h " + countdown[2] + "m " + countdown[3] + "s "):''}</p>
        <p>Remaining till next birthday: {birthdate ==="" ? '':daysUntilNextBday(birthdate)}</p>

    </div>
  )
}

export default AvgDeath