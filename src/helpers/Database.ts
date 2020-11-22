import { Db, MongoClient, ObjectId } from 'mongodb';

export interface BaseModel {
  _id: ObjectId;
  name: string;
}

export class Database {
  private db: Db | undefined;

  load() {
    console.log('Leyendo de la base de datos');
    return new Promise((resolve, reject) => {
      MongoClient.connect('mongodb://localhost/db_movies', (error, client) => {
        if (error) {
          reject('Error al conectar la base de datos');
        } else {
          this.db = client.db('db_movies');
          resolve();
        }
      });
    });
  }

  collection<T>(collectionName: string) {
    return this.db!.collection<T>(collectionName);
  }
}
