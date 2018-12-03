import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Home from './routes/Home';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
