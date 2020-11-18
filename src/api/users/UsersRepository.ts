import { BaseRepository } from '../utils/BaseRepository';
import { User } from './models';

export class UsersRepository extends BaseRepository<User> {
  constructor() {
    super('users');
  }
}
