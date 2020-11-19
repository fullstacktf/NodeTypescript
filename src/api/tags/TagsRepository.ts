import { Tag } from './models';
import { BaseRepository } from '../utils/BaseRepository';

export class TagsRepository extends BaseRepository<Tag> {
  constructor() {
    super('tag');
  }
}
