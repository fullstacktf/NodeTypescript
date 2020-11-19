import { Videogame } from './models';
import { BaseRepository } from '../utils/BaseRepository';
import { ObjectID } from 'mongodb';

export class VideogamesRepository extends BaseRepository<Videogame> {
  constructor() {
    super('games');
  }

  readAll(): Promise<Videogame[]> {
    return this.getCollection().find({}).toArray();
  }

  edit(id: ObjectID, game: Partial<Videogame>): Partial<Videogame> {
    this.getCollection().updateOne({ _id: id }, { $set: { ...game } });
    return game;
  }
}

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
