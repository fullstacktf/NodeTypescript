import express from 'express';
import bookRouter from './api/books/';
import movieRouter from './api/movies/';
import { authenticate } from './api/middlewares/auth';
import { newGameRouter } from './api/games';
import { Database } from './helpers/Database';

const database: Database = new Database();

const app = express();

app.use(express.json());

app.use(authenticate);

app.get('/admin', (req, res) => res.json({ titulo: 'Lo importante es la salud' }));
app.use('/movie', movieRouter);
app.use('/books', bookRouter);
app.use('/game', newGameRouter(database));
app.get('/', (req, res) => res.json({ message: 'Hello from server 👋' }));

async function init() {
  await database.load();
  app.listen(1234, () => console.log('Listen on port 1234'));
}

init().catch(error => console.error('Algo ha fallado', error));
