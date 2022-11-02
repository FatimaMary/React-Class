let currentTimer = undefined;

function showTime() {
   if( document.getElementById('railway').checked == true) {
        console.log ('Railway button clicked');
        railwayTime();
    }
    

    if (document.getElementById('normal').checked == true) {
        console.log ('Normal time clicked' );
        normalTime();
    }
    
}


function round(i) {
    if (i < 10) {
        return ("0" + i)
    }
    if (i >= 10) {
        return (i)
    }
}

function railwayTime() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    min = round(min);
    sec = round(sec);

    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
    clearTimeout(currentTimer);
    currentTimer = setTimeout(railwayTime, 1000);

    
}

function normalTime() {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM"

    if(hour == 0){
        hour==12;
    }

    if(hour > 12){
        hour = hour - 12;
        session = "PM"
    }

    min = round(min);
    sec = round(sec);

    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec +"  " + session;
    clearTimeout(currentTimer);
    // console.log('cleared');
    currentTimer = setTimeout(normalTime, 1000);

}
