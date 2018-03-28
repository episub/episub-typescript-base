import {CssBaseline} from 'material-ui';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Route} from 'react-router-dom';
import {AppDrawer} from './components/Drawer';
import {ButtonPage} from './pages/Buttons';
import {ClockPage} from './pages/Clock';

const app = () => {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <AppDrawer>
          <Route path="/clock" component={ClockPage} />
          <Route path="/buttons" component={ButtonPage} />
        </AppDrawer>
      </BrowserRouter>
    </div>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
