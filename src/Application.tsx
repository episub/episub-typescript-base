import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Router, Switch} from 'react-router';
import {AppDrawer, ButtonPage, ClockPage, HomePage, Root} from './pages';

// Render react DOM
/*
The Router is rendered outside the AppDrawer in order to allow the toolbar to
change based on the current route. I don't like this method too much as it seems
to cause unnecessary dom updates on every page change. When router is inside
AppDrawer then the updates to dom are only performed for components inside the
AppDrawer. It might be more worthwhile to have the Toolbar as a single component
rather than multiple components inside a Switch and instead the Toolbar content is
controlled by mobx stores
*/
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
