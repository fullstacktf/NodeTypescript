import { BaseRepository } from '../utils/BaseRepository';
import { Database } from '../../helpers/Database';
import { Book } from './models';

export class BookRepository extends BaseRepository<Book> {
  constructor(database: Database) {
    super(database, 'books');
  }
}
