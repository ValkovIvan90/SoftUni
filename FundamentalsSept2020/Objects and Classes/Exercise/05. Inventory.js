function inventory(input) {
    let arr = [];

    input.forEach(element => {
        let [Hero, level, items] = element.split('/')
        level = Number(level)
        items = items.split(',').sort((a, b) => a.localeCompare(b))
        arr.push({ Hero, level, items })
    });

    arr.sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.Hero}`);
            console.log(`level => ${hero.level}`);
            console.log(`items =>${hero.items}`);

        })






}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])