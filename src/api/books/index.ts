import express from 'express';
import { database } from '../..';
import { createBook, deleteBook, getBook, modifyBook } from './service';
import { assertIsNumber } from '../../utils';

const router = express.Router();

router.post('/', (req, res) => {
  createBook(req.body).then(() => {
    res.json({ message: 'Ok' });
  }).catch(err => {
    res.status(500).json({ message: 'Algo ha salido mal! 😞😞', err });
  });
});

router.get('/:id', (req, res) => {
  try {
    const isbn = assertIsNumber(req.params.id);
    getBook(isbn)
      .then(book => res.status(200).json(book))
      .catch(() => res.status(403).json({ message: 'Book not found!' }));
  } catch (e) {
    res.status(404).json({ message: 'Invalid id' });
  }
});

router.get('/', (req, res) => {
  const booksCollection = database.collection('book');
  booksCollection
    .find()
    .limit(10)
    .toArray()
    .then((books) => {
      res.json(books);
    });
});

router.put('/:id', (req, res) => {
  modifyBook(req.body, req.params.id)
    .then(() => {
      res.json('Ok. Eres un pedazo de titan. Lo has modificado bien');
    })
    .catch((err => {
      console.log('Error: ', err);
    }));
});

router.delete('/:id', (req, res) => {
  deleteBook(req.params.id)
    .then(() => {
      res.json('OK. Eres un crack. Lo has borrado bien');
    })
    .catch((err => {
      console.log('Error: ', err);
    }));
});

export default router;
