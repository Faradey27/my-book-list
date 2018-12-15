import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import mockedBooks from './routes/Home/__test__/books.mock.json';

import store from './data';
import I18nProvider from './i18n';
import Home from './routes/Home';
import * as serviceWorker from './serviceWorker';

const renderHome = () => <Home books={mockedBooks} />;

const Root = () => (
  <I18nProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact render={renderHome} />
          <Route path="/home" exact render={renderHome}/>
        </Switch>
      </Router>
    </Provider>
  </I18nProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
