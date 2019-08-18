import fetch from 'isomorphic-fetch';
import { IBook, IFetchBooks } from '../../types';

interface IFetchBooksUI extends IFetchBooks {
  origin: string;
}

class BooksUISDK {
  fetchBooks = async ({
    origin,
    orderBy = 'name',
    startAt = 0,
    limit = 10,
  }: IFetchBooksUI) => {
    console.log('origin', origin);
    const books: IBook[] = await fetch(
      `${origin}/api/books?orderBy=${orderBy}&startAt=${startAt}&limit=${limit}`
    ).then(res => res.json());

    return books;
  };
}

export default new BooksUISDK();
