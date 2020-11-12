import { Movie, MovieDB } from './models';
import fetch from 'node-fetch';

let moviesDB: MovieDB = {
    'size': 5,
    'movies': {
      '1': {
        'id': 1,
        'name': 'Taxi Driver',
        'categoria': 'Cine Negro',
        'like': false
      },
      '2': {
        'id': 2,
        'name': 'El Padrino',
        'categoria': 'Drama',
        'like': true
      },
      '3': {
        'id': 3,
        'name': 'GoodFellas',
        'categoria': 'Mafia',
        'like': true
      },
      '4': {
        'id': 4,
        'name': 'American Pie',
        'categoria': 'Comedia',
        'like': true
      },
      '5': {
        'name': 'Pelicula nueva',
        'categoria': 'si',
        'like': false,
        'id': 5
      }
    }
  };

export const loadDatabase = () => {
    console.log('Leyendo de la base de datos');
    return new Promise((resolve, reject) => {
        // fs.readFile('./movies_db.json', (err, data) => {
        //     if (err) {
        //         reject('Hubo un error en la lectura del fichero');
        //     } else {
        //         moviesDB = JSON.parse(data.toString());
        //         resolve();
        //     }
        // });
        resolve();
    });
};

export const isLike = (id) => {

// TODO:    return moviesDB[getMovieIndex(id)].like;
};

export const saveDatabase = () => {
    console.log('Guardando la base de datos');
    return new Promise((resolve, reject) => {
        // fs.writeFile('movies_db.json', JSON.stringify(moviesDB, null, 2), (err) => {
        //     if (err) {
        //         reject('Hubo un error en la escritura del fichero');
        //     } else {
        //         resolve();
        //     }
        // });
        resolve();
    });
};


export function getMovies() {
    return moviesDB.movies;
}

export const getMovie = (id) => moviesDB.movies[id];

//export const getLikedMovie = (): Movie[] => Object.values(moviesDB.movies).filter(movie => movie.like)

const isLike2 = (movie) => movie.like;

export const getLikedMovie = (): Movie[] => Object.values(moviesDB.movies).filter(isLike2);

const sendNotification = (movie: Movie) => {
  const url = 'https://hooks.slack.com/services/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';
  const body = {text: 'Se ha creado la película: ' + movie.name, icon_emoji: ':react:'};
  const bodyJson = JSON.stringify(body);
  console.log(bodyJson);
  fetch(url, { method: 'POST', body: bodyJson, headers: { 'Content-Type': 'application/json' }})
  .then(json => console.log(json));
};

export function createMovie(movie: Movie): Movie {
  moviesDB.size++;
  movie.id = moviesDB.size;
  moviesDB.movies[moviesDB.size] = movie;
  saveDatabase();
  sendNotification(movie);
  return movie;
}

