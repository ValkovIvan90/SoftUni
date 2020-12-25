function solve(arr) {
    let heroes = {};
    let commands = {
        Heal(heroes, heroName, amout) {
            let name = heroes[heroName];
            amout = Number(amout);
            let sum = name.hp + amout;
            let rest = 0;
            if (sum > 100) {
                rest = 100 - name.hp;
                name.hp = 100;
            } else {
                name.hp+=amout;
                rest = amout;
            }
            console.log(`${heroName} healed for ${rest} HP!`);
        },
        Recharge(heroes, heroName, amout) {
            let name = heroes[heroName];
            amout = Number(amout);
            let sum = name.mp + amout;
            let rest = 0;
            if (sum > 200) {
                rest = 200 - name.mp;
                name.mp = 200;
            } else {
                rest = amout;
                name.mp+=amout;
            }
            console.log(`${heroName} recharged for ${rest} MP!`);

        },
        TakeDamage(heroes, heroName, damage, attacker) {
            damage = Number(damage);
            let name = heroes[heroName];
            name.hp -= damage;
            if (name.hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${name.hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }

        },
        CastSpell(heroes, heroName, mP, spellName) {
            let name = heroes[heroName];
            mP = Number(mP);
            if (name.mp >= mP) {
                name.mp -= mP;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${name.mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);

            }
        }
    };
    let count = 0;
    let heroesCount = Number(arr.shift());

    while (count !== heroesCount) {
        let [hero, hp, mp] = arr.shift().split(' ');
        [hp, mp] = [Number(hp), Number(mp)];
        heroes[hero] = { hp, mp };
        count++;
    }
    let line;
    while ((line = arr.shift()) !== 'End') {
        let [command, hero, ...args] = line.split(' - ');
        commands[command](heroes, hero, ...args);

    }
    let sorted = Object.entries(heroes).sort(sorting)
    for (const key of sorted) {
        console.log(key[0]);
        console.log(` HP: ${key[1].hp}`);
        console.log(` MP: ${key[1].mp}`);

    }
    function sorting(a, b) {
        return b[1].hp - a[1].hp || a[0].localeCompare(b[0])
    }

}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log('------------');

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);


