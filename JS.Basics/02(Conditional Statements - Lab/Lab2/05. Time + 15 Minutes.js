function time15Min(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = Number(arg2) + 15;

    if (minutes > 59) {
        minutes -= 60;
        hours++;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours > 23) {
        hours = 0;
    }
    console.log(hours + ":" + minutes);



}
time15Min(1, 46)