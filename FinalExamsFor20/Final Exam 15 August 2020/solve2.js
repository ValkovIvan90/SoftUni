function solve([text]) {
    let pattern = /(#|\|)(?<name>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let arr = [];
    let calorSum = 0;
    while ((result = pattern.exec(text)) !== null) {
        if (result) {
            let name = result.groups.name;
            let date = result.groups.date;
            let calories = result.groups.calories;
            calorSum += Number(calories);
            arr.push(name, date, calories)
        }
    }
    let foodDays = Math.floor(calorSum / 2000);
    console.log(`You have food to last you for: ${foodDays} days!`);
    if (arr.length > 0) {

        for (let i = 0; i < arr.length; i += 3) {
            console.log(`Item: ${arr[i]}, Best before: ${arr[i + 1]}, Nutrition: ${arr[i + 2]}`);
        }
    }


}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log('--------------');

  solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
  ]);
console.log('-----------');
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']
)