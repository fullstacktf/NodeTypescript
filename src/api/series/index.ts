import express from 'express';
import { createSerie, getAllSeries, getSerieById, removeSerie, updateSerie } from './service';
import { database } from "../..";

const router = express.Router();

// GET
router.get('/season', (req, res) => {});

router.get('/', (req, res) => {
  const seriesCollection = database.collection('series');
    seriesCollection
      .find()
      .limit(10)
      .toArray()
      .then((serie) => {
        res.json(serie);
      });
});

router.get('/:id', (req, res) => {
  getSerieById(req.params.id)
  .then((serie) => {
    res.json(serie)
  })
  .catch((err => {
    console.log("Error: ", err);
  }))
});

// POST

router.post('/', (req, res) => {
  const serie = createSerie(req.body);
  res.json(serie);
});

// PUT

router.put('/:id/:name', (req,res) => {
  updateSerie(Number(req.params.id), req.params.name)
  .then((serie) => {
    res.json(serie)
  })
  .catch((err => {
    console.log(err)
  }))
})

// DELETE

router.delete('/:id', (req, res) => {
  removeSerie(Number(req.params.id))
  .then((serie) => {
    res.json("serie eliminada")
  })
  .catch((err => {
    res.json("Hubo un error " + err)
  }))
})



export default router;