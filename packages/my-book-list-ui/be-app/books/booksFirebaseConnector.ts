import firebase from 'firebase/app';
import 'firebase/firestore';

import { IBook, IFetchBooks } from '../../types';

class Books {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: 'mybooklist-972b5.firebaseapp.com',
        databaseURL: 'https://mybooklist-972b5.firebaseio.com',
        projectId: 'mybooklist-972b5',
        storageBucket: '',
        messagingSenderId: '44086550085',
        appId: '1:44086550085:web:4eaa7ea2298bab85',
      });
    }
  }

  fetchBooks = async ({
    orderBy = 'name',
    searchQuery = '',
    startAt = 0,
    limit = 10,
  }: IFetchBooks = {}) => {
    const books: IBook[] = [];

    const booksSnapshots = await firebase
      .firestore()
      .collection('books')
      .orderBy(orderBy)
      .startAt(Number(startAt))
      .limit(Number(100 || limit))
      .get();

    booksSnapshots.forEach(book => {
      books.push({
        id: book.id,
        ...(book.data() as IBook),
      });
    });

    return books.filter(book => {
      if (!searchQuery) {
        return true;
      }

      return book.name.includes(searchQuery);
    });
  };
}

export default new Books();
