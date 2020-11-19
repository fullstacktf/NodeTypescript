import express from 'express';
import { database } from '../..';
import { createTag } from './service'

/* import {

} from './service';
*/

const router = express.Router();

// Tags
router.post('/', (req, res) => {
  const tag = createTag(req.body);
  res.json(tag);
});

export default router;
