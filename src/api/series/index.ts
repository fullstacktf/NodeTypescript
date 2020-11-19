import express from 'express';
import { createSerie, getAllSeries, getSerieById } from './service';


const router = express.Router();

// GET
router.get('/season', (req, res) => {});

router.get('/', (req, res) => {
  res.json(getAllSeries());
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  res.json(getSerieById(id));
});

// POST

router.post('/', (req, res) => {
  const serie = createSerie(req.body);
  res.json(serie);
});

// PUT

//http://localhost:3000//like/3 EN POSTMAN POR EJEMPLO
router.put('/like/:id', (req, res) => {
  let id = Number(req.params.id);
  // TODO: 	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  // 	moviesDB[movieEditIndex].like = !moviesDB[movieEditIndex].like;
  // 	res.json(moviesDB[movieEditIndex]);
});
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  // 	moviesDB[movieEditIndex].name = req.body.name;
  // 	res.json(moviesDB[movieEditIndex]);
});

// DELETE

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  //	res.json(moviesDB.splice(movieEditIndex, 1));
});


export default router;