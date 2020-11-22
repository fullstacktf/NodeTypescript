import { DeleteWriteOpResultObject, ObjectId } from 'mongodb';
import { GameService } from '../service';
import { VideogamesRepository } from '../VideogamesRepository';

class VideogamesRepositoryDatabaseDown extends VideogamesRepository {


  delete(): Promise<DeleteWriteOpResultObject> {
    throw new Error('Database is down 🔥🔥🔥');
  }
}

describe('service', () => {
  it('Should throw an error when the database is down', () => {
    const databaseDownRepository = new VideogamesRepositoryDatabaseDown();
    const service = new GameService(database, databaseDownRepository);

    expect(() => service.deleteGame(new ObjectId('1'))).toThrowError();
  });
});
