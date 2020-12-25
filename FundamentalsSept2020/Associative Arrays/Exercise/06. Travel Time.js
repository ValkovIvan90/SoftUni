function travelTime(arr) {
    let obj = {};

    for (const key of arr) {
        let [country, city, price] = key.split(' > ');
        price = Number(price);

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
            obj[country][city] = price;
        }else{
            let towns = obj[country];
            if (!towns.hasOwnProperty(city)) {
                towns[city]=price;
            }else{
                let oldPrice=towns[city];
                if (oldPrice > price) {
                    towns[city]=price;
                }
            }
        }
    }
     
    let sorted=Object.entries(obj).sort((a,b)=>a[0].localeCompare(b[0]))
    
    
    
    for (let[name,towns] of sorted) {
        let sortTowns = Object.entries(towns).sort((a,b)=>a[1]-b[1]);
        let line = `${name} -> `;
        for (let [cityName,cityPrice] of sortTowns) {
            line += `${cityName} -> ${cityPrice} `;
        }
        console.log(line);
        
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])