const countDown = document.querySelector('#countdown')
let dateOfArrival = new Date('May 26, 2023 09:30:00').getTime();

let counter = setInterval(function(){

    const today = new Date().getTime();
    
    let timeDifference = dateOfArrival-today;

    if(timeDifference==0){
        clearInterval(dateOfArrival);
        document.getElementById('countdown').innerHTML='Inizia la lezione'
    }else{


        let second = Math.floor(timeDifference/1000);

        let minute = Math.floor(second/60);

        let hour = Math.floor(minute/60);

        countDown.innerHTML = `${hour} ore ${minute % 60} minuti ${second % 60} secondi`;
        console.log(hour + ' ore ' + (minute % 60) +  ' minuti '+ (second % 60) + ' secondi ');


    }

    

}, 1000);