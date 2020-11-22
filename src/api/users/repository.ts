import { BaseRepository } from '../utils/BaseRepository';
import { User } from './models';
import { Database } from '../../helpers/Database';

export class UsersRepository extends BaseRepository<User> {
  constructor(database: Database) {
    super(database, 'users');
  }
}
