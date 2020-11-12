"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const router = express_1.default.Router();
// Esto se hace con el PostMan
//creamos ID para las peliculas
router.post('/', (req, res) => {
    const movie = service_1.createMovie(req.body);
    res.json(movie);
});
///////likes
router.get('/like/:id', (req, res) => {
    let id = Number(req.params.id);
    res.json(service_1.isLike(id));
});
router.get('/like', (req, res) => {
    // TODO: 	let likedDDBB = moviesDB.filter((movie) => movie.like);
    // 	res.json(likedDDBB);
});
router.get('/unlike', (req, res) => {
    // TODO:	let likedDDBB = moviesDB.filter((movie) => !movie.like);
    // 	res.json(likedDDBB);
});
//http://localhost:3000//like/3 EN POSTMAN POR EJEMPLO
router.put('/like/:id', (req, res) => {
    let id = Number(req.params.id);
    // TODO: 	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
    // 	moviesDB[movieEditIndex].like = !moviesDB[movieEditIndex].like;
    // 	res.json(moviesDB[movieEditIndex]);
});
//Cambia el nombre de la pelicula
router.put('/:id', (req, res) => {
    let id = Number(req.params.id);
    // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
    // 	moviesDB[movieEditIndex].name = req.body.name;
    // 	res.json(moviesDB[movieEditIndex]);
});
//Muestra solo 1 pelicula
router.get('/:id', (req, res) => {
    res.json(service_1.getMovie(req.params.id));
});
//Borra 1 pelicula
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    // TODO:	let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
    //	res.json(moviesDB.splice(movieEditIndex, 1));
});
router.get('/', (req, res) => {
    res.json(service_1.getMovies());
});
exports.default = router;
