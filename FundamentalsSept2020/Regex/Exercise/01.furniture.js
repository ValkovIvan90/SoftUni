function furniture(arr) {
    
    let result = `Bought furniture:\n`;
    let total = 0;

    for (const line of arr) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d]+)/g;
        let match = pattern.exec(line);
        if (match) {
            result+=match.groups.name+'\n';
            total+=Number(match.groups.price)*Number(match.groups.count);
        }
    }

  result+=`Total money spend: ${total.toFixed(2)}`;
  console.log(result);
  

 }
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])