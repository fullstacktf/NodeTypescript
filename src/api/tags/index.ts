import express from 'express';
import { database } from '../..';
import { createTag, deleteTag } from './service'

/* import {

} from './service';
*/

const router = express.Router();

// Tags
router.post('/', (req, res) => {
  const tag = createTag(req.body);
  res.json(tag);
});

router.get('/', (req, res) => {
  const tagsCollection = database.collection('tag');
  tagsCollection
    .find()
    .limit(10)
    .toArray()
    .then((tags) => {
      res.json(tags);
    });
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const tag = deleteTag(id);
  res.json(tag);
});

export default router;
