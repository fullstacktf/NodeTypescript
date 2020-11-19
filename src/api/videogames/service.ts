import { Videogame } from './models';
import { Collection, DeleteWriteOpResultObject, ObjectID } from 'mongodb';
import { VideogamesRepository } from './VideogamesRepository';

export const insertGames = (moviesCollection: Collection<any>) => {
  const newGame = {
    name: 'Juego nuevo',
    categoria: 'si',
    like: false,
    id: 5,
  };
  moviesCollection.insertOne(newGame).then(() => {
    console.log('Juego insertado');
  });
};

const videogamesRepository = new VideogamesRepository();

export function createGame(game: Videogame): Videogame {
  videogamesRepository.save(game);
  return game;
}

export function searchGames(): Promise<Videogame[]> {
  return videogamesRepository.readAll();
}

export function updateGame(
  id: ObjectID,
  game: Partial<Videogame>
): Partial<Videogame> {
  return videogamesRepository.edit(id, game);
}

export function deleteGame(id: ObjectID): Promise<DeleteWriteOpResultObject> {
  return videogamesRepository.delete(id);
}

/*export function getMediaGames(): Promise<Number> {
   return new Promise(()
   videogamesRepository.readAll().then((games) => {
   games.media
  });
}*/
