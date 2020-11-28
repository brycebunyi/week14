 function timeleft(){
    let x = +document.getElementById('number').value;
    let days = (365*90) - (x*365);
    let weeks = (52*90) - (x*52);
    let months = (12*90) - (x*12);      
     if(x > 0 && x <= 90){
        document.getElementById('result').innerHTML="You have " + days + " days, " + weeks  + " weeks, " + " and " + months + " months left... ";
        console.log(typeof(x))
    }
    else {
        alert("Enter Age Less Than 90");
           
        }
    }