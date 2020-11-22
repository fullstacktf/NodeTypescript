import { Database } from '../../helpers/Database';
import { UsersRepository } from './repository';
import { UsersService } from './service';
import { UsersController } from './controller';

export const generateUsersRouter = (database: Database) => {
  const moviesRepository = new UsersRepository(database);
  const moviesService = new UsersService(moviesRepository);
  const moviesController = new UsersController(moviesService);

  return moviesController.router;
};
