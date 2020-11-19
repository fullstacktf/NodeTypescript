import { Videogame } from './models';
import { Collection } from 'mongodb';
import { VideogamesRepository } from './VideogamesRepository';

export const insertGames = (moviesCollection: Collection<any>) => {
  const newGame = {
    name: 'Juego nuevo',
    categoria: 'si',
    like: false,
    id: 5
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

export function searchGames(): Videogame[] {
  return videogamesRepository.readAll();
}


