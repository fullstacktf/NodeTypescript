import express from 'express';
import { createSong, getAllSongs, getSongsByMinDuration } from './service';

const router = express.Router();

router.post('/', (req, res) => {
  createSong(req.body);
  res.json('Se ha insertado o no');
});

router.get('/like/:id', (req, res) => {
});

router.get('/like', (req, res) => {
});

router.get('/unlike', (req, res) => {
});


router.put('/like/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});


router.get('/:id', (req, res) => {

});


router.delete('/:id', (req, res) => {

});

router.get('/duration/:sec', (req, res) => {
  getSongsByMinDuration(Number(req.params.sec)).then((songs) => res.json(songs));
});

router.get('/', (req, res) => {
    getAllSongs().then((songs) => res.json(songs));
});

export default router;
