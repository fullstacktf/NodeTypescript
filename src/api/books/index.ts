import express from 'express';
import { database } from '../..';
import { createBook, deleteBook, getBook, modifyBook } from './service';


const router = express.Router();

router.post('/', (req, res) => {
  const book = createBook(req.body);
  res.json(book);
});

router.get('/:id', (req, res) => {
  getBook(req.params.id)
    .then((book) => {
    res.json(book)
    })
    .catch((err => {
      console.log("Error: ", err);
    }))
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
    .then((book) => {
    res.json("Ok. Eres un pedazo de titan. Lo has modificado bien")
    })
    .catch((err => {
      console.log("Error: ", err);
    }))
});

router.delete('/:id', (req, res) => {
  deleteBook(req.params.id)
    .then((book) => {
      res.json("OK. Eres un crack. Lo has borrado bien");
    })
    .catch((err => {
      console.log("Error: ", err);
    }))
});
  
export default router;