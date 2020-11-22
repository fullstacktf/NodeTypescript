import { Movie } from './models';
import { MoviesRepository } from './repository';

export class MoviesService {
  private readonly repository: MoviesRepository;

  constructor(moviesRepository: MoviesRepository) {
    this.repository = moviesRepository;
  }

  async createMovie(newMovie: Movie) {
    return this.repository.save(newMovie);
  }

  async isLikeThisMovie(id: string): Promise<boolean> {
    const movie = await this.repository.findById(id);
    if (!movie) {
      console.error('Movie not found', id);
      return false;
    }
    return movie.like;
  }

  getLikes() {
    // TODO
    return Promise.resolve([]);
  }
}

//
// export const insertMovies = (moviesCollection: Collection<any>) => {
//   const newMovie = {
//     name: 'Pelicula nueva',
//     categoria: 'si',
//     like: false,
//     id: 5
//   };
//   moviesCollection.insertOne(newMovie).then(() => {
//     console.log('Pelicula insertada');
//   });
// };
//
// export const loadDatabase = (): Promise<Db> => {
//   console.log('Leyendo de la base de datos');
//   return new Promise((resolve, reject) => {
//     MongoClient.connect('mongodb://localhost/db_movies', (error, client) => {
//       if (error) {
//         reject('Error al conectar la base de datos');
//       } else {
//         const db = client.db('db_movies');
//         resolve(db);
//       }
//     });
//   });
//
//   /*
//   const db =
//   moviesCollection
//     .find({})
//     .toArray()
//     .then((movies) => {
//       console.log('movies: ', movies);
//     });
//   if (error) console.log('error: ', error);
//
//   return new Promise((resolve, reject) => {
//     // fs.readFile('./movies_db.json', (err, data) => {
//     //     if (err) {
//     //         reject('Hubo un error en la lectura del fichero');
//     //     } else {
//     //         moviesDB = JSON.parse(data.toString());
//     //         resolve();
//     //     }
//     // });
//     resolve();
//   });
//   */
// };
//
// export const isLike = (id) => {
//   // TODO:    return moviesDB[getMovieIndex(id)].like;
// };
//
//
// export function getMovies() {
//   return moviesDB.movies;
// }
//
// export const getMovie = (id) => moviesDB.movies[id];
//
// //export const getLikedMovie = (): Movie[] => Object.values(moviesDB.movies).filter(movie => movie.like)
//
// const isLike2 = (movie) => movie.like;
//
// export const getLikedMovie = (): Movie[] =>
//   Object.values(moviesDB.movies).filter(isLike2);
//
//
// const moviesRepository = new MoviesRepository();
//

