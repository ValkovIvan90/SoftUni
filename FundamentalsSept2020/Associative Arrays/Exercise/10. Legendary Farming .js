function legendaryFarming(input) {
    let legendary = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    }

    let text = input.split(' ');
    let obj = {};
    let elements = Object.keys(legendary);
    for (let i = 0; i < text.length; i += 2) {
        let items = Number(text[i]);
        let article = text[i + 1].toLowerCase();
        if (!obj.hasOwnProperty(article)) {
            obj[article] = items;
        } else {
            obj[article] += items;
        }

        if (elements.includes(article) && obj[article] >= 250) {
            console.log(`${legendary[article]} obtained!`);
            obj[article] -= 250;
            break;
        }
    }
    for (const el of elements) {
        if (!obj.hasOwnProperty(el)) {
            obj[el] = 0;
        }
    }
    let junk = {};
    let array = Object.entries(obj);
    let objLegend = {};
    for (let [name, items] of array) {
        if (elements.includes(name)) {
            objLegend[name] = items;
        } else {
            junk[name] = items;
        }
    }
    let sorted = Object.entries(objLegend).sort((a, b) => a[0].localeCompare(b[0]));
    sorted.sort((a, b) => b[1] - a[1]).forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);

    });
    let sorttedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, items] of sorttedJunk) {
        console.log(`${name}: ${items}`);
    }

}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
