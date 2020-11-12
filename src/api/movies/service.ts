import fs from "fs";

let moviesDB = {};

export const loadDatabase = () => {
    console.log("Leyendo de la base de datos");
    return new Promise((resolve, reject) => {
        fs.readFile("movies_db.json", (err, data) => {
            if (err) {
                reject("Hubo un error en la lectura del fichero");
            } else {
                moviesDB = JSON.parse(data.toString());
                resolve();
            }
        });
    });
};

export const getMovieIndex = (id) => {
// TODO:   return moviesDB.findIndex((movie) => movie.id === id);
};

export const isLike = (id) => {
// TODO:    return moviesDB[getMovieIndex(id)].like;
};

export const saveDatabase = () => {
    console.log("Guardando la base de datos");
    return new Promise((resolve, reject) => {
        fs.writeFile("movies_db.json", JSON.stringify(moviesDB, null, 2), (err) => {
            if (err) {
                reject("Hubo un error en la escritura del fichero");
            } else {
                resolve();
            }
        });
    });
};


export function getMovies() {
    return moviesDB;
}

export const getMovie = (id) =>  moviesDB[id];

export function createMovie(movie) {
// TODO:     moviesDB.size++;
//     movie.id = moviesDB.size;
//     moviesDB[moviesDB.size] = movie;
//     saveDatabase();
//     return movie;
}

