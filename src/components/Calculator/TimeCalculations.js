
export const todayInSeconds=() =>{
    var time= new Date();
    return ((time.getHours()*60*60)+(time.getMinutes()*60)+time.getSeconds());
}


export const ageCalculation = (birthdate) => {
    var refDate= new Date(birthdate);

    if(Date.now()>refDate.getTime()){

    var monthDiff = Date.now() - refDate.getTime();
    var ageDt= new Date(monthDiff);
    var year = ageDt.getUTCFullYear();
    return (Math.abs(year-1970))
    
    } else {

        return 'You life in the future'
    }
}

export const ageDifference = (age) =>{
    var avgLifeEx = 83;
    var averageRemainingLifespan = avgLifeEx-age;
    return averageRemainingLifespan
}

export const daysUntilNextBday = (date) =>{

        //get todays date --> array (year, month, day)
        var today= new Date();
        var ymdToday = [today.getFullYear(),today.getMonth()+1,today.getDate()]; //+1 converts the month from digital (0-11) to normal

        //Convert date into same Format and into an array (year, month, day)
        var ymdBday = new Date (date)
        ymdBday = [ymdBday.getFullYear(),ymdBday.getMonth()+1,ymdBday.getDate()];
        
        // your bday month is passed OR during your month + day of your birthday/after
        if((ymdToday[1] > ymdBday[1]) || ((ymdToday[1] === ymdBday[1]) && (ymdToday[2] >= ymdBday[2]))){

            var nextYearBday = new Date(ymdToday[0]+1, ymdBday[1]-1,ymdBday[2]+1);
      
            return Math.round((nextYearBday-today)/(1000*60*60*24) );

        }
        //birthday month but before bday
        else if ((ymdToday[1] < ymdBday[1]) || (ymdToday[1]=== ymdBday[1] && ymdToday[2] < ymdBday[2]) ){

            var thisYbDay = new Date(ymdToday[0], ymdBday[1]-1,ymdBday[2]+1);
          
            return (Math.round((thisYbDay-today)/(1000*60*60*24)));

        } else {
            console.log('error: daysUntilNextBday')
        }
}

export const daysUntilYouDie = (date,age) => {

        if((83-age)<=0){
            return "You are amazing! You outlifed statistic"
        }else{


        //get todays date --> array (year, month, day)
        var today= new Date();
        //var ymdToday = [today.getFullYear(),today.getMonth()+1,today.getDate()]; //+1 converts the month from digital (0-11) to normal
       
        //Convert birthdate into same Format and into an array (year, month, day)
        var ymdBday = new Date (date)
        ymdBday = [ymdBday.getFullYear(),ymdBday.getMonth()+1,ymdBday.getDate()];       
        

        var endbirthYear = ymdBday[0] + 83;

        var endBirthday = new Date( endbirthYear, ymdBday[1]-1,ymdBday[2])

       
        
       var distance = endBirthday - today;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        //return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
       var countdown = [days, hours, minutes, seconds]
       return countdown
        //return 1+ Math.round((endBirthday-today)/(1000*60*60*24));

        
   
        }
}