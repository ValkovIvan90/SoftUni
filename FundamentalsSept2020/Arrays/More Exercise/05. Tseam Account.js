function tseanAccount(arr) {
    let PetersAccount = arr.shift().split(' ');

    for (const key of arr) {
        let [command, game] = key.split(' ');
        if (command==='Play') {
            break;
        }
        if (command === 'Install') {
            if (!game.includes(PetersAccount)) {
                PetersAccount.push(game);
            } 
        }else if(command==='Uninstall'){
           if (PetersAccount.includes(game)) {
               let index=PetersAccount.indexOf(game);
                PetersAccount.splice(index,1);
           }
        }else if (command==='Update') { 
            if (PetersAccount.includes(game)) {
                let index=PetersAccount.indexOf(game);
                PetersAccount.splice(index,1);
                PetersAccount.push(game);
            }
        }else if(command==='Expansion'){
              let element=game.split('-')
            if (PetersAccount.includes(element[0])) {
                let index=PetersAccount.indexOf(element[0]);
                let newGame=game.replace('-',':')
                PetersAccount.splice(index+1,0,newGame)
            }
            
        }

    }
 console.log(PetersAccount.join(' '));
 
}
tseanAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])


//90 punkts!!