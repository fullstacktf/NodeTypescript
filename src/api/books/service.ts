import { BookRepository } from './repository';

export class BookService {
  private repository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.repository = bookRepository;
  }
}

// FIXME 👇👇👇
//
// export function createBook(book: Book): Promise<unknown> {
//   const collection = database.collection('book');
//   return new Promise((resolve, reject) => {
//     collection.insertOne(book, err => {
//       if (err) {
//         console.log('Error: ', err);
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }
//
// export function getBook(isbn: number): Promise<Book> {
//   const collection = database.collection('book');
//   return new Promise((resolve, reject) => {
//     collection.findOne({ isbn }, (err, result) => {
//       if (err) {
//         console.log('Error: ', err);
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// }
//
// export function modifyBook(book: Book, isbn: string) {
//   const collection = database.collection('book');
//   return new Promise((resolve, reject) => {
//     const query = { isbn: Number(isbn) };
//     const body = { $set: { ...book } };
//     const options = { returnOriginal: false, upsert: false };
//     collection.findOneAndUpdate(query, body, options, (err, result) => {
//       if (err) {
//         console.log('Error: ', err);
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// }
//
// export function deleteBook(isbn: string) {
//   const collection = database.collection('book');
//   return new Promise((resolve, reject) => {
//     collection.deleteOne({ isbn: Number(isbn) }, (err, result) => {
//       if (err) {
//         console.log('Error: ', err);
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// }
