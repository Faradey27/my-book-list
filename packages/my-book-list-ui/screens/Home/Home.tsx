import firebase from 'firebase/app';

import Screen from '../../layouts/Screen';
import { theme } from '../../layouts/Screen/Screen';

import Block from '../../components/Block';
import BookCard from '../../components/BookCard';
import SearchInput from '../../components/SearchInput';
import Section from '../../components/Section';

import AddIcon from '../../assets/icons/AddIcon';

import { IBook } from '../../types';
// import { useEffect } from 'react';

const books: IBook[] = [
  {
    avatar: {
      src:
        'https://iknigi.net/books_files/covers/thumbs_300/osnovanie-akademiya-8407.jpg',
      width: 100,
      height: 150,
    },
    authors: ['Айзек Азимов'],
    name: 'Основание',
    shortDescription:
      'Действие первой части трилогии `Основание` разворачивается в далеком будущем, когда заселены планеты миллионов звездных систем Галактики. Математик и психоисторик Хэри Сэлдон предсказывает крах и возрождение через много лет несокрушимой Галактической Империи. Чтобы смягчить последствия катастрофы он разрабатывает проект создания Основания, которое должно стать центром зарождения новой Империи',
  },
  {
    avatar: {
      src: 'http://www.opencourtbooks.com/images/1984.jpg',
      width: 100,
      height: 150,
    },
    authors: ['Джордж Оруэлл'],
    name: '1984',
    shortDescription:
      'Джордж Оруэлл (настоящее имя — Эрик А. Блэр), писатель острого, иронического ума, за свою недолгую жизнь создал множество произведений, из которых в нашей стране наиболее известны повесть-притча «Скотный двор» и знаменитый, ставший итогом жизненного и творческого пути своего создателя роман-антиутопия «1984», вошедший в данное издание.',
  },
  {
    avatar: {
      src:
        'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/c/o/cover1_1__4_18.jpg',
      width: 100,
      height: 150,
    },
    authors: ['Ремарк'],
    name: 'Жизнь взаймы',
    shortDescription:
      'ЖИЗНЬ ВЗАЙМЫ - это жизнь, которую герои отвоевывают у смерти. Когда терять уже нечего, когда один стоит на краю гибели, так эту жизнь и не узнав, а другому эта треклятая жизнь стала невыносима. И как всегда у Ремарка, только любовь и дружба остаются незыблемыми. Только в них можно найти точку опоры.',
  },
];

const Home = () => {
  // useEffect(() => {
  //   const books = firebase.firestore().collection('books');
  //   books.
  //   books.onSnapshot(v => {
  //     v.forEach(x => {
  //       console.log(x.data());
  //     });
  //   });
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
      <Section title={`${books.length} Books`}>
        {books.map(book => (
          <div className="book-layout">
            <BookCard {...book} />
          </div>
        ))}
      </Section>
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

export default Home;
