function movies(arr) {
    let movies = [];

    arr.forEach(line => {
        const tokens = line.split(' ');
        const addIndex = tokens.indexOf('addMovie');        //Locking about index of the Command
        const directorIndex = tokens.indexOf('directedBy');
        const onDateIndex = tokens.indexOf('onDate');

        if (addIndex > -1) {
            movies.push({ name: tokens.slice(addIndex+1).join(' ') })//We make Array whit a Object and Add the Film
        }                                              //Джоин за да върнем остатъка като цяло изречение!
        if (directorIndex > -1) {
            const name = tokens.slice(0, directorIndex).join(' ');// Name of the Film
            const director = tokens.slice(directorIndex + 1).join(' ');// Director
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        }

        if (onDateIndex > -1) {
            const name = tokens.slice(0, onDateIndex).join(' ');
            const date = tokens.slice(onDateIndex + 1).join(' ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
      

    });
    movies.forEach(movie=>{
        if (movie.name!==undefined&&movie.director //When Film name ,director and date are valid we print!-
          !==undefined&&movie.date!==undefined) {
            console.log(JSON.stringify(movie));
            
        }
    })

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])