import { GameRepository } from './repository';
import { Database } from '../../helpers/Database';

export class GameService {
  private repository: GameRepository;

  constructor(database: Database) {
    this.repository = new GameRepository(database);
  }

  async deleteGame(id: string) {
    return this.repository.deleteById(id);
  }
}

//
// export const insertGames = (moviesCollection: Collection<any>) => {
//   const newGame = {
//     name: 'Juego nuevo',
//     categoria: 'si',
//     like: false,
//     id: 5
//   };
//   moviesCollection.insertOne(newGame).then(() => {
//     console.log('Juego insertado');
//   });
// };
//
// export function createGame(game: Videogame): Videogame {
//   videogamesRepository.save(game);
//   return game;
// }
//
// export function searchGames(): Promise<Videogame[]> {
//   return videogamesRepository.readAll();
// }
//
// export function updateGame(
//   id: ObjectID,
//   game: Partial<Videogame>
// ): Partial<Videogame> {
//   return videogamesRepository.edit(id, game);
// }
//
// export function deleteGame(id: ObjectID): Promise<DeleteWriteOpResultObject> {
//   return videogamesRepository.delete(id);
// }
//
// /*export function getMediaGames(): Promise<Number> {
//    return new Promise(()
//    videogamesRepository.readAll().then((games) => {
//    games.media
//   });
// }*/
//
//
// // find id
// const movie = repository.find(24);
// // likes ++
// movie.checkout(0.100);
// // save id
// repository.save(movie);
//
//
// // espero que dada una película con 3 likes se pasen a 4
//
// fakeRepository.find(24)--;
// ->
// {
//   likes: 3;
// }
// ;
//
// service.like(24);
//
// expect(fakeRespository.save).toBeCalled({ likes: 100 });
//
//
//
//
//
//
