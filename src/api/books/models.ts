export interface Book {
    isbn: number;
    name: string;
    categoria: string;
    like: boolean;
}

export interface BookDB {
    size: number;
    books: {
      [key: string]: Book;
    }
  }