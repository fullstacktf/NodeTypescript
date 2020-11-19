import { database } from "../..";
import { Book } from "./models";

export function createBook(book: Book): Book {
    const collection = database.collection('book');
    collection.insertOne(book, (error, result) => {
      if (error) {
        console.error('Error', error);
      }
    });
    return book;
}

export function getBook(isbn: string): Promise<Book> {
    const collection = database.collection('book');
    return new Promise ((resolve, reject) => {
        collection.findOne({isbn: Number(isbn)}, (err, result) => {
            if (err) {
                console.log("Error: ", err);
            }
            resolve(result);
        })
    })
}

export function modifyBook(book: Book, isbn: string) {
    const collection = database.collection('book');
    return new Promise ((resolve, reject) => {
        const query = { isbn: Number(isbn) };
        const body = { $set: { ...book } };
        const options = { returnOriginal: false, upsert: false };
        collection.findOneAndUpdate(query, body, options, (err, result) => {
            if (err) {
                console.log("Error: ", err);
            }
            resolve(result);
        })
    })
}

export function deleteBook(isbn: string) {
    const collection = database.collection('book');
    return new Promise ((resolve, reject) => {
        collection.deleteOne({isbn: Number(isbn)}, (err, result) => {
            if (err) {
                console.log("Error: ", err);
            }
            resolve(result);
        })
    })
}