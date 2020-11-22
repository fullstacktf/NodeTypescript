import { Game } from './models';
import { BaseRepository } from '../utils/BaseRepository';
import { Database } from '../../helpers/Database';

export class GameRepository extends BaseRepository<Game> {
  constructor(database: Database) {
    super(database, 'games');
  }

  // TODO: use baseRepository methods
  //
  // readAll(): Promise<Videogame[]> {
  //   return this.getCollection().find({}).toArray();
  // }
  //
  // edit(id: ObjectID, game: Partial<Videogame>): Partial<Videogame> {
  //   this.getCollection().updateOne({ _id: id }, { $set: { ...game } });
  //   return game;
  // }
  //
  // delete(id: ObjectID): Promise<DeleteWriteOpResultObject> {
  //   return this.getCollection().deleteOne({ _id: id });
  // }


  /*
  save(model: OptionalId<T>) {
      this.getCollection().insertOne(model, (error, result) => {
        if (error) {
          console.error('error', error);
        } else {
          console.log('Result: ', result);
        }
      });
    }
  */
}

