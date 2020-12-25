function examPreparation(input) {
    let maxUnsativGrade = Number(input.shift());//максимално незадоволителни оценки.
    let unsativGrade = 0;//брой на незадоволителни оценки.

    let currentExam = input.shift();//текущ изпит
    let currentGrade = Number(input.shift());//текуща оценка

    let passedExam = 0;//минали изпити
    let lastExam = "";//последен изпит
    let sumOfAllGrade = 0;//сума на изпитите

    while ((currentExam !== "Enough") && (unsativGrade < maxUnsativGrade)) {
        passedExam++;
        lastExam = currentExam;
        sumOfAllGrade += currentGrade;
        if (currentGrade <= 4) {
            unsativGrade++;
        }

        currentExam = input.shift();
        currentGrade = Number(input.shift());

    }
    if (currentExam === "Enough") {
        let averageScore = sumOfAllGrade / passedExam;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${passedExam}`);
        console.log(`Last problem: ${lastExam}`);

    } else {
        console.log(`You need a break, ${unsativGrade} poor grades.`);

    }
}
examPreparation([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
]
);
