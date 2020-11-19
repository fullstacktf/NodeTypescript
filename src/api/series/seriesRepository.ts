import { Serie } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class SeriesRepository extends BaseRepository<Serie> {
  constructor() {
    super('serie');
  }
}