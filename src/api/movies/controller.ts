import { Router } from 'express';
import { MoviesService } from './service';

export class MoviesController {
  private service: MoviesService;
  public readonly router: Router;

  constructor(service: MoviesService) {
    this.service = service;
    this.router = Router();

    this.router.post('/', this.createMovie);

    this.router.get('/like/:id', this.isLikeThisMovie);
    this.router.get('/like', this.getLikes);
    // TODO: this.router.get('/unlike', this.getUnlikes);

    /**
//http://localhost:3000//like/3 EN POSTMAN POR EJEMPLO
    this.router.put('/like/:id', (req, res) => {
      let id = Number(req.params.id);
      // TODO: 	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
      // 	moviesDB[movieEditIndex].like = !moviesDB[movieEditIndex].like;
      // 	res.json(moviesDB[movieEditIndex]);
    });

//Cambia el nombre de la pelicula
    this.router.put('/:id', (req, res) => {
      let id = Number(req.params.id);
      // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
      // 	moviesDB[movieEditIndex].name = req.body.name;
      // 	res.json(moviesDB[movieEditIndex]);
    });
//Muestra solo 1 pelicula
    this.router.get('/:id', (req, res) => {
      res.json(getMovie(req.params.id));
    });
//Borra 1 pelicula
    this.router.delete('/:id', (req, res) => {
      let id = Number(req.params.id);
      // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
      //	res.json(moviesDB.splice(movieEditIndex, 1));
    });

    this.router.get('/', (req, res) => {
      const moviesCollection = database.collection('movie');
      moviesCollection
        .find()
        .limit(10)
        .toArray()
        .then((movies) => {
          res.json(movies);
        });
    });
     **/
  }

  private async getLikes(req, res) {
    const movies = this.service.getLikes();
    res.json(movies);
  }

  private async createMovie(req, res) {
    const newMovie = req.body;
    const movie = await this.service.createMovie(newMovie);
    res.json(movie);
  }

  private isLikeThisMovie(req, res) {
    const id = req.params.id;
    res.json(this.service.isLikeThisMovie(id));
  }
}
