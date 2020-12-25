function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor >= 1; floor--) {
        let roomNumber = floor * 10;
        let currentFloor = "";
        for (let room = 1; room <= rooms; room++) {
            if (floor === floors) {
                currentFloor += (`L${roomNumber} `);
            } else if (floor % 2 !== 0) {
                currentFloor += (`A${roomNumber} `);
            } else {
                currentFloor += (`O${roomNumber} `);
            }
            roomNumber++;
        }
        console.log(currentFloor);
    }
}
building([6, 4])