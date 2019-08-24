import { IncomingMessage } from 'http';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import Link from 'next/link';

import Section from '../Section';
import Spinner from '../Spinner';

import { IBook } from '../../../types';
import withDataLoader, { States } from '../../hocs/withDataLoader';
import BookCard from '../BookCard';

import booksUISDK from '../../../be-app/books/booksUISDK';
import { getOrigin } from '../../utils/reqUtils';

interface IBooksSearchRecommendationsListProps {
  payload: IBook[];
  state: States;
  searchValue?: string;
}

const messages = defineMessages({
  title: {
    id: 'booksSearcRecommendationsList.title',
    defaultMessage: 'What about:',
  },
  emptyState: {
    id: 'booksSearcRecommendationsList.emptyState',
    defaultMessage: 'No books found',
  },
});

const BooksSearchRecommendationsList = ({
  state,
  payload,
}: IBooksSearchRecommendationsListProps) => {
  const intl = useIntl();

  return (
    <>
      <Section
        title={intl.formatMessage(messages.title, { count: payload.length })}
      >
        {state === States.loading ? (
          <Spinner />
        ) : (
          payload.map(book => (
            <Link
              href="/books/[id]"
              as={`/books/${book.id}`}
              key={book.id}
              shallow={true}
            >
              <a className="book-layout">
                <BookCard {...book} />
              </a>
            </Link>
          ))
        )}
        {state === States.success && !payload.length && (
          <FormattedMessage {...messages.emptyState} />
        )}
      </Section>
      <style jsx>{`
        .book-layout {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

const getFetchTriggers = (props: IBooksSearchRecommendationsListProps) => [
  props.searchValue || '',
];

const booksFetcher = (
  req: IncomingMessage | null,
  props: IBooksSearchRecommendationsListProps
) =>
  booksUISDK.fetchBooks({
    origin: getOrigin(req),
    searchQuery: props.searchValue,
  });

export default withDataLoader(getFetchTriggers)(booksFetcher, [])(
  BooksSearchRecommendationsList
);
