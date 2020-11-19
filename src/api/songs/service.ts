import { Song } from './models';
import { Collection, Db, MongoClient } from 'mongodb';

import { SongsRepository } from './SongsRepository';

const repo = new SongsRepository();

export const getAllSongs = (): Promise<Song[]> => repo.findAll();

export const createSong = (song: Song): void => repo.save(song);
