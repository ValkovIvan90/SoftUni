function solve(arr) {
    let livesTime = arr[0];
    let steps = Number(arr[1]);
    let timeForOneStep = arr[2];

    let needTime = steps * timeForOneStep;

    let array = livesTime.split(':').map(Number);


    let minuts = (needTime + array[2]);
    minuts = Math.trunc(minuts / 60)
    let seconds = Math.abs((minuts * 60) - (needTime + array[2]));
    array[1] = array[1] + minuts;
    array[2] = seconds;

    if (array[1] > 59) {
        let hours = Math.floor(array[1] / 60);
        array[0] += hours;
        array[1] = Math.abs(array[1] - hours * 60);

    }
    if (array[0] > 23) {
        array[0] = array[0] - 24;
    }
    if (array[0] < 10) {
        array[0] = '0' + array[0];
    }
    if (array[2] < 10) {
        array[2] = '0' + array[2];
    }
    if (array[1] < 10) {
        array[1] = '0' + array[1];
    }
    console.log(`Time Arrival: ${array.join(':')}`);


}
solve(['12:30:30', '90', '1']);
solve(['23:49:13', '5424', '2', '']);
