export interface Movie {
  id: number;
  name: string;
  categoria: string;
  like: boolean;
}

export interface MovieDB {
  size: number;
  movies: {
    [key: string]: Movie;
  }
}
