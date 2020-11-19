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

export const createSerie = (body) => {
  seriesDB.size++;
  seriesDB.serie[seriesDB.size] = body;
  return seriesDB;
}