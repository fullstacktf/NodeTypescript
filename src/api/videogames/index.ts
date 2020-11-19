import express from 'express';
import { database } from '../..';
import {
  createGame
} from './service';

const router = express.Router();
// Esto se hace con el PostMan
//creamos ID para los juegos
router.post('/', (req, res) => {
  const movie = createGame(req.body);
  res.json(movie);
});

router.get('/', (req, res) => {
  const moviesCollection = database.collection('movie');
  moviesCollection
    .find()
    .limit(10)
    .toArray()
    .then((movies) => {
      res.json(movies);
    });
});

export default router;
