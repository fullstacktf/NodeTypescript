import { Movie } from '../movies/models';

export interface Tag {
  id: number;
  name: string;
  movie: Movie[];
}
