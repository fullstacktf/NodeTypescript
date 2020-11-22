import { Movie } from '../movies/models';
import { BaseModel } from '../../helpers/Database';

export interface Tag extends BaseModel {
  id: number;
  name: string;
  movie: Movie[];
}
