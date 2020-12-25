function towns(arr) {
    for (const key of arr) {
        let newText = key.split(' | ');
        let newObj = {
            town: newText[0],
            latitude: Number(newText[1]).toFixed(2),
            longitude: Number(newText[2]).toFixed(2)

        }
        console.log(newObj);
    }
    
    
    
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);