import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from "mongoose";

import { BookRoutes } from './features/books';

class App {
  public app: express.Application;
  public router: BookRoutes = new BookRoutes();
  public mongoUrl: string = 'mongodb://localhost/mybooklistdb';

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.router.routes(this.app);
  }

  private config(): void{
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
    (mongoose as any).Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
