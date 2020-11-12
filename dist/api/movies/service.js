"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = exports.getMovie = exports.getMovies = exports.saveDatabase = exports.isLike = exports.loadDatabase = void 0;
const fs_1 = __importDefault(require("fs"));
let moviesDB = {};
exports.loadDatabase = () => {
    console.log('Leyendo de la base de datos');
    return new Promise((resolve, reject) => {
        fs_1.default.readFile('./movies_db.json', (err, data) => {
            if (err) {
                reject('Hubo un error en la lectura del fichero');
            }
            else {
                moviesDB = JSON.parse(data.toString());
                resolve();
            }
        });
    });
};
exports.isLike = (id) => {
    // TODO:    return moviesDB[getMovieIndex(id)].like;
};
exports.saveDatabase = () => {
    console.log('Guardando la base de datos');
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile('movies_db.json', JSON.stringify(moviesDB, null, 2), (err) => {
            if (err) {
                reject('Hubo un error en la escritura del fichero');
            }
            else {
                resolve();
            }
        });
    });
};
function getMovies() {
    return moviesDB;
}
exports.getMovies = getMovies;
exports.getMovie = (id) => moviesDB[id];
function createMovie(movie) {
    // TODO:     moviesDB.size++;
    //     movie.id = moviesDB.size;
    //     moviesDB[moviesDB.size] = movie;
    //     saveDatabase();
    //     return movie;
}
exports.createMovie = createMovie;
