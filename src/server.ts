import express from 'express';
import { generateMoviesRouter } from './api/movies/';
import { authenticate } from './api/middlewares/auth';
import { generateGamesRouter } from './api/games';
import { Database } from './helpers/Database';
import { generateTagsRouter } from './api/tags';
import { generateBooksRouter } from './api/books';

const database: Database = new Database();

const app = express();

app.use(express.json());

app.use(authenticate);

app.get('/admin', (req, res) => res.json({ titulo: 'Lo importante es la salud' }));
app.use('/movies', generateMoviesRouter(database));
app.use('/books', generateBooksRouter(database));
app.use('/games', generateGamesRouter(database));
app.use('/tags', generateTagsRouter(database));
app.get('/', (req, res) => res.json({ message: 'Hello from server 👋' }));

async function init() {
  await database.load();
  app.listen(1234, () => console.log('Listen on port 1234'));
}

init().catch(error => console.error('Algo ha fallado', error));
