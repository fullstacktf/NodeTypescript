import { GameService } from './service';
import { Database } from '../../helpers/Database';
import { GameRepository } from './repository';
import { GameController } from './controller';

export const generateGamesRouter = (database: Database) => {
  const gameRepository = new GameRepository(database);
  const gameService = new GameService(gameRepository);
  const gameRouter = new GameController(gameService);

  return gameRouter.router;
};
