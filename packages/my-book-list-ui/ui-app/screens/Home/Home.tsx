import { NextPage } from 'next';

import Screen from '../../layouts/Screen';

import booksUISDK from '../../../be-app/books/booksUISDK';
import { IBook } from '../../../types';
import { Modals } from '../../index.d';

import withDataLoader, { States } from '../../hocs/withDataLoader';
import { getOrigin } from '../../utils/reqUtils';

import ChooseBookToAddModal from '../../components/ChooseBookToAddModal';

import Content from './components/Content';
import Header from './components/Header';
import { withRouter } from 'next/dist/client/router';
import { WithRouterProps } from 'next/dist/client/with-router';

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

interface IHomeProps extends WithRouterProps {
  payload: IBook[];
  state: States;
}

const Home: NextPage<IHomeProps> = ({ payload, state, router }: IHomeProps) => {
  console.log(process.env.SENTRY_DSN, 'SENTRY_DSN');
  console.log(process.env.SENTRY_RELEASE, 'SENTRY_RELEASE');
  return (
    <Screen name="home">
      <Header />
      <Content payload={payload} state={state} />
      <ChooseBookToAddModal
        isOpen={router.query.modalType === Modals.ChooseBook}
      />
    </Screen>
  );
};

export default withDataLoader(
  req => booksUISDK.fetchBooks({ origin: getOrigin(req) }),
  [],
  1000
)(withRouter(Home));
