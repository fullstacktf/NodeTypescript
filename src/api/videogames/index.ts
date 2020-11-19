import express from 'express';
import { ObjectID } from 'mongodb';
import { database } from '../..';
import { createGame, deleteGame, searchGames, updateGame } from './service';

const router = express.Router();
// Esto se hace con el PostMan
//creamos ID para los juegos
router.post('/', (req, res) => {
  const movie = createGame(req.body);
  res.json(movie);
});

router.get('/', (req, res) => {
  searchGames().then((games) => {
    res.json(games);
  });
});

router.put('/:id', (req, res) => {
  let id = new ObjectID(req.params.id);
  let result = updateGame(id, req.body);
  res.json(result);
});

router.delete('/:id', (req, res) => {
  let id = new ObjectID(req.params.id);
  deleteGame(id).then((resolve) => {
    if (resolve.deletedCount === 0) {
      res.status(404).json({ message: 'Game NOT FOUND' });
    } else {
      res.status(200).json({ message: 'Game deleted' });
    }
  });
});

export default router;
