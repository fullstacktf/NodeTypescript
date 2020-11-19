import { Serie, seriesDB } from './models';

let seriesDB: seriesDB = {
  size: 1,
  serie: {
    1: {
      id: 1,
      name: 'Blair Mainor',
      category: 'Terror',
      seasons: {
        1: {
          episodes: {
          1: {
            name: "piloto",
            duration: 60
          },
          2: {
            name: "piloto",
            duration: 60
          }
        }
        }     
      }
    }
  } 
}

export const getAllSeries = () => {
  return seriesDB;
}

export const getSerieById = (id:number) => {
  const serie = seriesDB.serie[id];
  return serie;
}

export const createSerie = (body:any) => {
  seriesDB.size++;
  seriesDB.serie[seriesDB.size] = body;
  return seriesDB;
}

export const removeSerie = (id:number) => {
  let serie = seriesDB.serie[id] 
  if (serie) {
    delete seriesDB.serie[id]
    // seriesDB.serie.splice(id, 1);
  }
  else{
    console.log("No existe la serie")
  }
  return seriesDB;
}