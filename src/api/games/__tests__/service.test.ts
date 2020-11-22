import { GameRepository } from '../repository';
import { Database } from '../../../helpers/Database';
import { GameService } from '../service';

class GameRepositoryDatabaseDown extends GameRepository {
  constructor() {
    super({} as Database);
  }

  async deleteById(id: string): Promise<unknown> {
    throw new Error(`Database is down 🔥🔥🔥: ${id}`);
  }
}

describe('service', () => {
  it('Should throw an error when the database is down', done => {
    const databaseDownRepository = new GameRepositoryDatabaseDown();
    const service = new GameService(databaseDownRepository);

    service.deleteGame('1')
      .then(() => done('No exception thrown'))
      .catch(() => done());
  });
});
