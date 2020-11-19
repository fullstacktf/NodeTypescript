import { Videogame } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class VideogamesRepository extends BaseRepository<Videogame> {
  constructor() {
    super('games');
  }
}