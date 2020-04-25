/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Container from 'react-bootstrap/Container';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Container className="p-1">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
