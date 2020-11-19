import { seriesDB } from './models';

import { database } from "../..";
import { rejects } from 'assert';

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
  return database.collection('series');
}

export const getSerieById = (id:string) => {
  const collection = database.collection('series')
  return new Promise ((resolve, reject) => {
    collection.findOne({id: Number(id)}, (err, result) => {
        if (err) {
            console.log("Error: ", err);
        }
        resolve(result);
    })
})
}

export const createSerie = (serie:any) => {
  const collection = database.collection('series')
  collection.insertOne(serie, (error, result) => {
    if(error){
      console.error("error", error)
    }
  })
  return serie;
}

export const removeSerie = (id:number) => {
  const collection = database.collection('series');
  return new Promise ((resolve, reject) => {
    collection.deleteOne({id: id}, (err, result) => {
        if (err) {
            console.log("Error: ", err);
        }
        resolve(result);
    })
})
}

export const updateSerie = (id:number, name: string) => {
  const collection = database.collection('series');
  return new Promise ((resolve, reject) => {
    collection.updateOne({id: id},{$set: {"name": name}}, (err, result) => {
      if(err) {
        console.log("Error " + err);
      }
      resolve(result)
    })
  });
}
