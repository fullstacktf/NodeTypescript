import express from 'express';
import { Db } from 'mongodb';
import movieRouter from './api/movies/';
import { insertMovies, loadDatabase } from './api/movies/service';
import { User } from './api/users/models';
import { findUserById } from './api/users/service';
import seriesRouter from './api/series/';

const app = express();
app.use(express.json());

export let database: Db;

app.use((req, res, next) => {
  console.log('paso por aqui', req.method);
  console.log('req.url: ', req.url);
  const idToFind: number = Number(req.headers.id);
  const user = findUserById(idToFind);
  console.log('Usuario:', user);
  if (req.url.includes('admin')) {
    if (user && user.rol === 'admin') {
      next();
      return;
    } else {
      res.sendStatus(404);
      return;
    }
  }
  if (req.method == 'GET') {
    next();
    return;
  }
  if (req.headers.clavesupersegura === '1234') {
    next();
  } else {
    console.log('no puede pasar');
    res.sendStatus(403);
  }
});

app.get('/admin', (req, res) => {
  res.json({ titulo: 'Lo importante es la salud' });
});

app.use('/movie', movieRouter);

app.use('/series', seriesRouter);

app.get('/', (req, res) => {
  res.json(req);
});

async function init() {
  database = await loadDatabase();
  app.listen(3000, () => console.log('Listen on port 3000'));
}

init().catch((error) => {
  console.error('Algo ha fallado', error);
});

/* .then((db) => {
    database = db;
    app.listen(3000, () => console.log('Listen on port 3000'));
  })
  .catch((err) => {
    console.error("Database wasn't loaded: ", err);
  });*/
