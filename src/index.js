import React from 'react';

import { render } from 'react-dom';

// Import Components
import App from './components/App';

// Import css
require('../styles/index.scss');

require('../images/img1.jpg');

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}