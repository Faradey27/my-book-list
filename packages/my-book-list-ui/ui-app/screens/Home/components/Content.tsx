import { defineMessages, useIntl } from 'react-intl';

import Link from 'next/link';

import BookCard from '../../../components/BookCard';
import Section from '../../../components/Section';
import Spinner from '../../../components/Spinner';

import { States } from '../../../hocs/withDataLoader';

import { IBook } from '../../../../types';

interface IContentProps {
  payload: IBook[];
  state: States;
}

const messages = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage:
      '{count, plural, =0 {No books added} one {# Book} other {# Books}}',
  },
});

const Content = ({ state, payload }: IContentProps) => {
  const intl = useIntl();

  return (
    <>
      {state === States.loading ? (
        <Spinner />
      ) : (
        <Section
          title={intl.formatMessage(messages.title, { count: payload.length })}
        >
          {payload.map(book => (
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
          ))}
        </Section>
      )}
      <style jsx>{`
        .book-layout {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

export default Content;
