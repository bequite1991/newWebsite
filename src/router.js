import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './components/homePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/HomePage" component={HomePage} />
    </Router>
  );
}

export default RouterConfig;
