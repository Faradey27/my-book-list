import Image from '../Image';

import { IBook } from '../../types';

const BookCard = ({ name, avatar, authors, annotation }: IBook) => (
  <div data-hook="bookCard-component" className="bookCard-component">
    <div className="book-image">
      <Image image={avatar} alt={name} />
    </div>
    <div className="book-info">
      <div className="book-name">{name}</div>
      <div className="book-authors">
        {authors.map(author => author.name).join(', ')}
      </div>
      <div className="book-annotation">{annotation}</div>
    </div>
    <style jsx>{`
      .bookCard-component {
        display: flex;
      }
      .book-image {
        width: 100px;
        height: 150px;
        margin-right: 10px;
      }
      .book-info {
        width: 180px;
      }
      .book-name {
        display: block;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .book-authors {
        font-size: 12px;
        color: #757575;
        font-weight: 600;
      }
      .book-annotation {
        color: #757575;
        margin-top: 10px;
        font-size: 13px;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    `}</style>
  </div>
);

export default BookCard;
