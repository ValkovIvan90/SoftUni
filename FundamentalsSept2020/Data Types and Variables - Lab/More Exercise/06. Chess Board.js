function cheesBoards(num) {
    let currentColor = 'black';
    let secondColor = '';
    console.log('<div class="chessboard">');


    for (let i = 1; i <= num; i++) {
        console.log('  <div>');
        for (let j = 1; j <= num; j++) {
            console.log(`  <span class="${currentColor}"></span>`);

               secondColor=currentColor;
               currentColor=secondColor==='black'?'white':'black';//Ако текуя е равен на втория цвят равно черно
        }        //   ако е истина променяме на бяло ,ако не на черно
       console.log('  </div>');
       if (num%2===0) {
        secondColor=currentColor;
        currentColor=secondColor==='black'?'white':'black';
       }

    }
    console.log('</div>');
    
}
cheesBoards(3)