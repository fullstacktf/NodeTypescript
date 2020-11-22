import { MoviesService } from './service';
import { Database } from '../../helpers/Database';
import { MoviesController } from './controller';
import { MoviesRepository } from './repository';

export const generateMoviesRouter = (database: Database) => {
  const moviesRepository = new MoviesRepository(database);
  const moviesService = new MoviesService(moviesRepository);
  const moviesController = new MoviesController(moviesService);

  return moviesController.router;
};
