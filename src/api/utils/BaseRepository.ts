import { database } from '../../index';
import { Collection } from 'mongodb';

export class BaseRepository<T> {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  private getCollection(): Collection<T> {
    return database.collection(this.name);
  }

  save(model: T) {
    this.getCollection().insertOne(model as any, (error, result) => {
      if (error) {
        console.error('error', error);
      } else {
        console.log('Result: ', result);
      }
    });
  }
}

