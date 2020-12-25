function trainTrainers(input) {
    let juryNum=Number(input.shift());//брой на журито!
   let examName = input.shift()//име на изпита!
   let finalScore=0;//краен резултат
   let count=0;//брой на оценките


    while (examName!=="Finish") {
        let score=0;//оценка!
        for (let i = 0; i < juryNum; i++) {
            let grade =Number(input.shift())//
            score+=grade;
            finalScore+=grade;
            count++;
        }
        console.log(`${examName} - ${(score/juryNum).toFixed(2)}.`);
        examName=input.shift();
    }
    
    console.log(`Student's final assessment is ${(finalScore/count).toFixed(2)}.`);
    
}
trainTrainers([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish'
  ]
  );