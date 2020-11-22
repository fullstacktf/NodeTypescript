import express, { Router } from 'express';
import { GameService } from './service';
import { Database } from '../../helpers/Database';

export const generateGamesRouter = (database: Database) => {
  const gameService = new GameService(database);
  const gameRouter = new GameRouter(gameService);

  return gameRouter.router;
};

class GameRouter {
  private service: GameService;
  public readonly router: Router;

  constructor(service: GameService) {
    this.service = service;
    this.router = express.Router();

    this.router.delete('/:id', this.deleteVideoGame);
  }

  private async deleteVideoGame(req, res) {
    const id = req.params.id;
    await this.service.deleteGame(id);
    res.json({ message: 'Game deleted' });
    // const result = await this.service.deleteGame(id);
    // if (result.deletedCount === 0) {
    //   res.status(404).json({ message: 'Game NOT FOUND' });
    // } else {
    //   res.status(200).json({ message: 'Game deleted' });
    // }
  }
}

// TODO: refactor this 👇👇
//
// const router = express.Router();
// // Esto se hace con el PostMan
// //creamos ID para los juegos
// router.post('/', (req, res) => {
//   const movie = createGame(req.body);
//   res.json(movie);
// });
//
// router.get('/', (req, res) => {
//   searchGames().then((games) => {
//     res.json(games);
//   });
// });
//
// router.put('/:id', (req, res) => {
//   let id = new ObjectID(req.params.id);
//   let result = updateGame(id, req.body);
//   res.json(result);
// });
//
// router.delete('/:id', (req, res) => {
//   const id = new ObjectID(req.params.id);
//   deleteGame(id).then((resolve) => {
//     if (resolve.deletedCount === 0) {
//       res.status(404).json({ message: 'Game NOT FOUND' });
//     } else {
//       res.status(200).json({ message: 'Game deleted' });
//     }
//   });
// });
//
// export default router;
