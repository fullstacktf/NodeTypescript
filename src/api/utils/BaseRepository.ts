import { database } from '../../index';
import { Collection, OptionalId } from 'mongodb';

export class BaseRepository<T> {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  private getCollection(): Collection<T> {
    return database.collection(this.name);
  }

  save(model: OptionalId<T>) {
    this.getCollection().insertOne(model, (error, result) => {
      if (error) {
        console.error('error', error);
      } else {
        console.log('Result: ', result);
      }
    });
  }

  findAll() : Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.getCollection()
        .find()
        .limit(100) //limit
        .toArray()
        .then(results => resolve(results))
        .catch(err => reject(err));
    });
  }


}

