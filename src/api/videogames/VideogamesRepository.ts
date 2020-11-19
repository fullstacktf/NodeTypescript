import { Videogame } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class VideogamesRepository extends BaseRepository<Videogame> {
  constructor() {
    super('games');
  }

  readAll(): Videogame[]{
    let games = [];
    this.getCollection().find({}).toArray(function(err, result) {
      console.log(result);
      games = result;
    });
    return games;
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
