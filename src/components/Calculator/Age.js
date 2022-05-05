import React, { useEffect, useState } from 'react'
import AvgDeath from './AvgDeath';
import { ageCalculation } from './TimeCalculations';

const Age = () => {

const [birthdate, setBirthdate]= useState("");
const [age, setAge]= useState("")

useEffect(()=>{
    if(birthdate != null){
        setAge(ageCalculation(birthdate))
        }  
    },[birthdate]);

  return (
      
    <div>
    <label>Geburtsdatum: </label>
        <input
            type="date"
            id="age"
            name="age"
            onChange={((e) => setBirthdate(e.target.value))}
            value={birthdate}
        />

        <p>Your birthdate: {birthdate ===''? "": birthdate}</p>
        <p>Your age: {birthdate ===''? "": age} </p>
        <AvgDeath birthdate={birthdate} age={age}/>
    </div>
  )
}

export default Age