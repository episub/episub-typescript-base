import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Router, Switch} from 'react-router';
import {AppDrawer, ButtonPage, ClockPage, HomePage, Root} from './pages';

// Render react DOM
export const App = hot(module)(({history}) => (
  <Root>
    <Router history={history}>
      <AppDrawer>
        <Switch>
          <Route path="/buttons" component={ButtonPage} />
          <Route path="/clock" component={ClockPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </AppDrawer>
    </Router>
  </Root>
));
