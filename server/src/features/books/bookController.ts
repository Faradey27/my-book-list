import * as mongoose from 'mongoose';
import { BookSchema } from './bookModel';
import { Request, Response } from 'express';

const Book = mongoose.model('Book', BookSchema);

export class BookController {
  public addNewBook (req: Request, res: Response) {
    const newBook = new Book(req.body);

    newBook.save((err, book) => {
      if(err){
        res.send(err);
      }
      res.json(book);
    });
  }

  public getBooks (_req: Request, res: Response) {
    Book.find({}, (err, book) => {
      if(err){
        res.send(err);
      }
      res.json(book);
    });
  }

  public getBookWithID (req: Request, res: Response) {
    Book.findById(req.params.bookId, (err, book) => {
      if(err){
        res.send(err);
      }
      res.json(book);
    });
  }

  public updateBook (req: Request, res: Response) {
    Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, book) => {
      if(err){
          res.send(err);
      }
      res.json(book);
    });
  }

  public deleteBook (req: Request, res: Response) {
    Book.remove({ _id: req.params.bookId }, (err) => {
      if(err){
        res.send(err);
      }
      res.json({ message: 'Successfully deleted book!'});
    });
  }
}
