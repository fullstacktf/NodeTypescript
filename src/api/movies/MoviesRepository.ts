import { database } from '../..';
import { Movie } from './models';

const NAME = 'movie';

export class MoviesRepository {
  save(movie: Movie) {
    const collection = database.collection(NAME);
    collection.insertOne(movie, (error, result) => {
      if (error) {
        console.error('error', error);
      }
    });
  }
}
