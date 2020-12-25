function songs(arr) {
    
    class Songs{
        constructor(name){
           this.name=name
         
        }
        nameS(){
            console.log(`${this.name}`);
            
        }
    }

    let songsCount=arr.shift();
    let typeList=arr.pop();
     
    for (const key of arr) {
        let[type,songName,time]=key.split('_');
        if (typeList===type) {
            let song = new Songs(songName);
            song.nameS();
        }
        else if (typeList==='all') {
            let song = new Songs(songName);
            song.nameS();
        }
        
    }
    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);