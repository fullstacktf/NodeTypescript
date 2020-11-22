import { Tag } from './models';
import { BaseRepository } from '../utils/BaseRepository';
import { Database } from '../../helpers/Database';

export class TagsRepository extends BaseRepository<Tag> {
  constructor(database: Database) {
    super(database, 'tag');
  }
}
