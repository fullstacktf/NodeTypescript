import express from 'express';
import { database } from '../..';
import {
    getAllSongs,
} from './service';

const router = express.Router();

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    getAllSongs().then((songs) =>
        res.json(songs)
    )
});

export default router;
