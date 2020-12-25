function arenaTier(arr) {

    let gladiators = {};

    let command = arr.shift().split(' -> ');

    while (command[0] !== 'Ave Cesar') {
        if (command[0].includes('vs')) {
            let heroes = command[0].split(' ');
            let heroOne = heroes.shift();
            let heroTwo = heroes.pop();
            if (gladiators.hasOwnProperty(heroOne) && gladiators.hasOwnProperty(heroTwo)) {
                let firstTechn = (gladiators[heroOne]);
                let secondTechn = (gladiators[heroTwo]);
                for (const  key in firstTechn) {
                    if (secondTechn.hasOwnProperty(key)) {
                        if (firstTechn[key] > secondTechn[key]) {
                            delete gladiators[heroTwo]
                        } else {
                            delete gladiators[heroOne];
                        }
                    }
                }
            }

        } else {
            let name = command[0];
            let technique = command[1];
            let skill = Number(command[2]);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
                gladiators[name][technique] = skill;
            } else {
                let oldTechnik = gladiators[name];
                if (!oldTechnik.hasOwnProperty(technique)) {
                    let oldSkill = Object.values(oldTechnik);
                    let last = oldSkill.pop();
                    if (last <= skill) {
                        gladiators[name][technique] = skill;
                    } else {
                        name[technique] = skill
                    }
                }

            }
        }
        command = arr.shift().split(' -> ');
    }

    for (const key in gladiators) {
        let result = 0;
        let obj = gladiators[key];
        for (const secondObj in obj) {
            result += obj[secondObj];

        }
        obj['result'] = result;
    }
    Object.entries(gladiators).sort((a, b) => b[1].result - a[1].result
        || a[0].localeCompare(b[0])).forEach(el => {
            console.log(`${el[0]}: ${el[1].result} skill`);
            delete el[1].result;
            Object.entries(el[1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(el => {
                    console.log(` - ${el[0]} <!> ${el[1]}`);

                });
        });



}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    
    
    //solve 2  100 points in Judge!!)

    /*
    function solve(input) {
  let obj = {};

  for (const line of input) {
    if (line === 'Ave Cesar') {
      break;
    }
    let element = line.split(' ');
    if (element[1] === '->') {
      let theLine = line.split(' -> ');
      let gladiator = theLine[0];
      let technique = theLine[1];
      let skillAmount = Number(theLine[2]);
      if (!obj.hasOwnProperty(gladiator)) {
        obj[gladiator] = {};
      }
      if (!obj[gladiator].hasOwnProperty(technique)
        || obj[gladiator][technique] < skillAmount) {
        obj[gladiator][technique] = skillAmount;
      }
    } else if (element[1] === 'vs') {
      let theLine = line.split(' vs ');
      let gladiator1 = theLine[0];
      let gladiator2 = theLine[1];
      if (obj.hasOwnProperty(gladiator1)
        && obj.hasOwnProperty(gladiator2)) {
        let gladiator1Techniques = (obj[gladiator1]);
        let gladiator2Techniques = (obj[gladiator2]);
        for (const key in gladiator1Techniques) {

          if (gladiator2Techniques.hasOwnProperty(key)) {
            if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
              delete obj[gladiator2];
            } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
              delete obj[gladiator1];
            }
          }
        }
      }
    }
  }
  for (const key in obj) {
    let sum = 0;
    let outsideObj = obj[key];
    for (const insideKey in outsideObj) {
      sum += outsideObj[insideKey];
    }
    outsideObj['sum'] = sum;
  }

  Object.entries(obj)
    .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    .forEach(element => {
      console.log(`${element[0]}: ${element[1].sum} skill`);
      delete element[1].sum;
      Object.entries(element[1])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(element => {
          console.log(` - ${element[0]} <!> ${element[1]}`);
        });
    });
}


solve([
  'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
])
 */)