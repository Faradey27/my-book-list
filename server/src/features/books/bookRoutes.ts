import { Request, Response } from "express";
import { BookController } from './bookController';

export class BookRoutes {
  public bookController: BookController = new BookController();

  public routes(app): void {
    app.route('/')
      .get((_req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      })

    // Books
    app.route('/books')
      .get(this.bookController.getBooks)
      .post(this.bookController.addNewBook)

    // Book details
    app.route('/books/:bookId')
      .get(this.bookController.getBookWithID)
      .put(this.bookController.updateBook)
      .delete(this.bookController.deleteBook)
  }
}
