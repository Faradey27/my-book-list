import firebase from 'firebase/app';

import { IBook } from '../types';

interface IFetchBooks {
  orderBy?: keyof IBook;
  startAt?: number;
  limit?: number;
}

class Books {
  fetchBooks = async ({
    orderBy = 'name',
    startAt = 0,
    limit = 10,
  }: IFetchBooks = {}) => {
    const books: IBook[] = [];

    const booksSnapshots = await firebase
      .firestore()
      .collection('books')
      .orderBy(orderBy)
      .startAt(startAt)
      .limit(limit)
      .get();

    booksSnapshots.forEach(book => {
      books.push({
        id: book.id,
        ...(book.data() as IBook),
      });
    });

    return books;
  };
}

export default new Books();
