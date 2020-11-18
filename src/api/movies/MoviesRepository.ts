import { Movie } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class MoviesRepository extends BaseRepository<Movie> {
  constructor() {
    super('movie');
  }

// save(movie: Movie) {
  //   const collection = database.collection(NAME);
  //   collection.insertOne(movie, (error, result) => {
  //     if (error) {
  //       console.error('error', error);
  //     }
  //   });
  // }
}
