import { Song } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class SongsRepository extends BaseRepository<Song> {
  constructor() {
    super('song');
  }
}
