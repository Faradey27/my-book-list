import { NextApiResponse } from 'next';

import booksFirebaseConnector from './booksFirebaseConnector';

import { IFetchBooks } from '../../types';

interface IApiRequest {
  query: IFetchBooks;
}

const booksApi = async (req: IApiRequest, res: NextApiResponse) => {
  res.send(
    await booksFirebaseConnector.fetchBooks({
      searchQuery: req.query.searchQuery,
      orderBy: req.query.orderBy,
      limit: req.query.limit,
      startAt: req.query.startAt,
    })
  );
};

export default booksApi;
