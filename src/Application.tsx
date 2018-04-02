import {CssBaseline} from 'material-ui';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Route} from 'react-router-dom';
import {AppDrawer} from './components/Drawer';
import {ButtonPage} from './pages/Buttons';
import {ClockPage} from './pages/Clock';
import {HomePage} from './pages/Home';

const app: React.SFC = () => {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <AppDrawer>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/clock" component={ClockPage} />
          <Route path="/buttons" component={ButtonPage} />
        </AppDrawer>
      </BrowserRouter>
    </div>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
