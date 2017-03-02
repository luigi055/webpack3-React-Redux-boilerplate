import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'App';
import About from 'About';
import Features from 'Features'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={About} />
    <Route path="features" component={Features} />
  </Route>
);