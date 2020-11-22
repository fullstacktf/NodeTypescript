import { Movie } from './models';
import { BaseRepository } from '../utils/BaseRepository';
import { Database } from '../../helpers/Database';

export class MoviesRepository extends BaseRepository<Movie> {
  constructor(database: Database) {
    super(database, 'movie');
  }
}
