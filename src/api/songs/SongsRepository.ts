import { Song } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class SongsRepository extends BaseRepository<Song> {
  constructor() {
    super('songs');
  }
  findByMinDuration(sec: number): Promise<Song[]> {
    return new Promise((resolve, reject) => {
      this.getCollection()
        .find({duration: { $gt: sec}})
        .limit(100)
        .toArray()
        .then(results => resolve(results))
        .catch(err => reject(err));
    });
  }
}
