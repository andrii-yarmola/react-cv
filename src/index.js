import React from 'react';

import { render } from 'react-dom';

// Import css
import styles from '../styles/index.scss';

// Import Components
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import CommercyList from './components/CommercyList';
import ReactList from './components/ReactList';
import CommercySingle from './components/CommercySingle';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/commercy-list" component={CommercyList}></Route>
        <Route path="/react-list" component={ReactList}></Route>
        <Route path="/about" component={About}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}