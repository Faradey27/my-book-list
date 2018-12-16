import { Request, Response } from "express";

export class Routes {
  public routes(app): void {
    app.route('/')
      .get((_req: Request, res: Response) => {
          res.status(200).send({
              message: 'GET request successfulll!!!!'
          })
      })

      // Books
      app.route('/books')
      .get((_req: Request, res: Response) => {
        // Get all books
        res.status(200).send({
            message: 'GET request successfulll!!!!'
        })
      })
      .post((_req: Request, res: Response) => {
        // Create new book
        res.status(200).send({
            message: 'POST request successfulll!!!!'
        })
      })

      // Book detail
      app.route('/books/:bookId')
      .get((_req: Request, res: Response) => {
        // Get a single book detail
        res.status(200).send({
            message: 'GET request successfulll!!!!'
        })
      })
      .put((_req: Request, res: Response) => {
        // Update a book
        res.status(200).send({
            message: 'PUT request successfulll!!!!'
        })
      })
      .delete((_req: Request, res: Response) => {
        // Delete a book
        res.status(200).send({
            message: 'DELETE request successfulll!!!!'
        })
      })
  }
}
