function gramophone(band,album,song) {
    let songDuration=(band.length*album.length*song.length)/2;

    console.log(`The plate was rotated ${Math.ceil(songDuration/2.5)} times.`);
    
    
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')