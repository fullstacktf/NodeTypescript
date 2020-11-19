import { Db, MongoClient } from 'mongodb';

export const getHelloMessage = () => 'Hello';

export const loadDatabase = (): Promise<Db> => {
  console.log('Leyendo de la base de datos');
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost/db', (error, client) => {
      if (error) {
        reject('Error al conectar la base de datos');
      } else {
        const db = client.db('db');
        resolve(db);
      }
    });
  });
};
