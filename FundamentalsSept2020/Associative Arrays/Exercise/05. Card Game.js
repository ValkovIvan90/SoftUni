function cardGame(arr) {
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    const carde = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let obj = {}

    for (const key of arr) {
        let [name, cards] = key.split(': ');
        cards = cards.split(', ');
        if (!obj.hasOwnProperty(name)) {// Ако нямам в Обекта такова име
             obj[name] = [];           // слагам името в обеkта и създавам масив!
        }
        obj[name].push(...cards) // Така двата масива на името се добавят един към друг!
        // Ако е без точките ще имама Обект с key name  и  value два отделни масива!
        //(...)= спред Оператор! Ще ми разбие масива  на отделни елементи!
    }

     
    for (const key in obj) {
        let sum = 0;
        let cards = new Set(obj[key]) //  new Set will filtered the Array from equall elements!
        Array.from(cards).forEach(card => {
            let element = card.split('');
            let color=element.pop();
            let cardNum=element.join('');
            if (isNaN(cardNum)) {
                cardNum=carde[cardNum];
            }
            sum+=colors[color]*Number(cardNum);
        })
       obj[key]=sum;

       console.log(`${key}: ${sum}`);
    }
  
  
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
