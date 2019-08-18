import { defineMessages, useIntl } from 'react-intl';

import Link from 'next/link';

import Screen from '../../layouts/Screen';
import { theme } from '../../layouts/Screen/Screen';

import AddIcon from '../../assets/icons/AddIcon';
import Block from '../../components/Block';
import BookCard from '../../components/BookCard';
import SearchInput from '../../components/SearchInput';
import Section from '../../components/Section';
import Spinner from '../../components/Spinner';

import booksUISDK from '../../../be-app/books/booksUISDK';

import withDataLoader, { States } from '../../hocs/withDataLoader';
import { getOrigin } from '../../utils/reqUtils';

import { IBook } from '../../../types';

// const books: IBook[] = [
//   {
//     avatar: {
//       src:
//         'https://iknigi.net/books_files/covers/thumbs_300/osnovanie-akademiya-8407.jpg',
//       width: 100,
//       height: 150,
//     },
//     authors: ['Айзек Азимов'],
//     name: 'Основание',
//     shortDescription:
//       'Действие первой части трилогии `Основание` разворачивается в далеком будущем, когда заселены планеты миллионов звездных систем Галактики. Математик и психоисторик Хэри Сэлдон предсказывает крах и возрождение через много лет несокрушимой Галактической Империи. Чтобы смягчить последствия катастрофы он разрабатывает проект создания Основания, которое должно стать центром зарождения новой Империи',
//   },
//   {
//     avatar: {
//       src:
//         'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/o/cover1_1__4_18.jpg',
//       width: 100,
//       height: 150,
//     },
//     authors: ['Ремарк'],
//     name: 'Жизнь взаймы',
//     shortDescription:
//       'ЖИЗНЬ ВЗАЙМЫ - это жизнь, которую герои отвоевывают у смерти. Когда терять уже нечего, когда один стоит на краю гибели, так эту жизнь и не узнав, а другому эта треклятая жизнь стала невыносима. И как всегда у Ремарка, только любовь и дружба остаются незыблемыми. Только в них можно найти точку опоры.',
//   },
// ];

const messages = defineMessages({
  search: {
    id: 'home.search',
    defaultMessage: 'Search by title, author or series',
  },
  title: {
    id: 'home.title',
    defaultMessage:
      '{count, plural, =0 {No books added} one {# Book} other {# Books}}',
  },
});

interface IHomeProps {
  payload: IBook[];
  state: States;
}

const Home = ({ payload, state }: IHomeProps) => {
  const intl = useIntl();

  return (
    <Screen name="home">
      <Block>
        <div>
          <SearchInput placeholder={intl.formatMessage(messages.search)} />
        </div>
        <span>
          <AddIcon />
        </span>
      </Block>
      {state === States.loading ? (
        <Spinner />
      ) : (
        <Section
          title={intl.formatMessage(messages.title, { count: payload.length })}
        >
          {payload.map(book => (
            <Link href={`/books/${book.id}`} key={book.id}>
              <a className="book-layout">
                <BookCard {...book} />
              </a>
            </Link>
          ))}
        </Section>
      )}
      <style jsx>{`
        div {
          width: 100%;
          margin-right: 16px;
        }
        span {
          height: 30px;
        }
        span:before {
          content: '';
          position: absolute;
          content: '';
          top: 50%;
          width: 42px;
          height: 42px;
          right: 10px;
          transform: translateY(-50%);
        }
        span > :global(svg) {
          width: 30px;
          height: 30px;
          fill: ${theme.colors.accentColor};
        }
        .book-layout {
          margin-bottom: 20px;
        }
      `}</style>
    </Screen>
  );
};

export default withDataLoader(
  req => booksUISDK.fetchBooks({ origin: getOrigin(req) }),
  [],
  1000
)(Home);
