function dungeonestDark(arr) {
    let coins = 0;
    let health = 100;
    let bestRoom = 0;
    let room = arr[0].split('|');
    for (const key of room) {
        let [el, item] = key.split(' ');
        item=Number(item);
        if (el === 'potion') {
            
            health += item;
            if (health > 100) {
                item=100+item-health;
                health = 100;
                
            }
            console.log(`You healed for ${item} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (el === 'chest') {
            coins += item;
            console.log(`You found ${item} coins.`);

        } else {
            health -= item;
            if (health > 0) {
                console.log(`You slayed ${el}.`);

            } else if (health <= 0) {
                console.log(`You died! Killed by ${el}.`);
                bestRoom++;
                   break;
            }
        }

        bestRoom++;
    };
    if (health>0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
        
    }else{
        console.log(`Best room: ${bestRoom}`);
    }
   


}
dungeonestDark([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]
)
