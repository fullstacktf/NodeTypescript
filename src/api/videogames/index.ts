import express from 'express';
import { database } from '../..';
import {
  createGame,
  searchGames
} from './service';

const router = express.Router();
// Esto se hace con el PostMan
//creamos ID para los juegos
router.post('/', (req, res) => {
  const movie = createGame(req.body);
  res.json(movie);
});

router.get('/', (req, res) => {
  const moviesCollection = searchGames();
  console.log(searchGames());
  res.json(moviesCollection);
});

export default router;
