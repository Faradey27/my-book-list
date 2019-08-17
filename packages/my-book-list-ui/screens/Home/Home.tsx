import Link from 'next/link';

import Screen from '../../layouts/Screen';
import { theme } from '../../layouts/Screen/Screen';

import Block from '../../components/Block';
import BookCard from '../../components/BookCard';
import SearchInput from '../../components/SearchInput';
import Section from '../../components/Section';

import AddIcon from '../../assets/icons/AddIcon';
import Spinner from '../../components/Spinner';
import booksModel from '../../models/booksModel';
import { IBook } from '../../types';

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
//       src: 'http://www.opencourtbooks.com/images/1984.jpg',
//       width: 100,
//       height: 150,
//     },
//     authors: ['Джордж Оруэлл'],
//     name: '1984',
//     shortDescription:
//       'Джордж Оруэлл (настоящее имя — Эрик А. Блэр), писатель острого, иронического ума, за свою недолгую жизнь создал множество произведений, из которых в нашей стране наиболее известны повесть-притча «Скотный двор» и знаменитый, ставший итогом жизненного и творческого пути своего создателя роман-антиутопия «1984», вошедший в данное издание.',
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

enum States {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failure = 'failure',
  empty = 'empty',
}

enum Actions {
  SET_BOOKS = 'SET_BOOKS',
  SET_STATE = 'SET_STATE',
}

interface IHomeAction {
  type: States | Actions;
  payload?: any;
}

type HomeReducer = (state: IHomeState, action: IHomeAction) => IHomeState;

interface IHomeState {
  books: IBook[];
  currentState: States;
}

const initialState: IHomeState = {
  books: [],
  currentState: States.idle,
};

const homeReducer = (state: IHomeState, action: IHomeAction) => {
  switch (action.type) {
    case Actions.SET_BOOKS:
      return { ...state, books: action.payload };
    case Actions.SET_STATE:
      return { ...state, currentState: action.payload };
    default:
      return state;
  }
};

interface IHomeProps {
  books: IBook[];
  state: States;
}

const Home = ({ books, state }: IHomeProps) => {
  // const [state, dispatch] = useReducer<HomeReducer>(homeReducer, initialState);

  // useEffect(() => {
  //   let didCancel = false;
  //   const fetchBooks = async () => {
  //     try {
  //       dispatch({ type: Actions.SET_STATE, payload: States.loading });
  //       const booksList = await booksModel.fetchBooks();

  //       if (!didCancel) {
  //         dispatch({ type: Actions.SET_BOOKS, payload: booksList });
  //         dispatch({ type: Actions.SET_STATE, payload: States.success });
  //       }
  //     } catch (e) {
  //       if (!didCancel) {
  //         dispatch({ type: Actions.SET_STATE, payload: States.failure });
  //       }
  //     }
  //   };

  //   fetchBooks();

  //   return () => {
  //     didCancel = true;
  //   };
  // }, []);

  return (
    <Screen name="home">
      <Block>
        <div>
          <SearchInput placeholder={'Search by title, author or series'} />
        </div>
        <span>
          <AddIcon />
        </span>
      </Block>
      {state === States.loading ? (
        <Spinner />
      ) : (
        <Section title={`${books.length} Books`}>
          {books.map(book => (
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

Home.getInitialProps = async () => {
  const props = await new Promise(resolve => {
    booksModel
      .fetchBooks()
      .then(books => resolve({ books, state: States.success }))
      .catch(() => resolve({ books: [], state: States.failure }));

    setTimeout(() => resolve({ books: [], state: States.loading }), 500);
  });

  return props;
};

export default Home;
