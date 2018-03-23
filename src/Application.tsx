import {CssBaseline, Grid} from 'material-ui';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Clock} from './components/Clock';
import {Welcome} from './components/Welcome';

const app = () => {
  /* Padding is set on div to account for the negative margin of the grid.
  (default spacing for grid items is 8 if you change it change padding to
  match)*/
  return (
    <div style={{padding: 8}}>
      <CssBaseline />
      <Grid container={true}>
        <Grid item={true} xs={3}>
          <Welcome name="User" />
        </Grid>
        <Grid item={true} xs={true}>
          <Clock />
        </Grid>
      </Grid>
    </div>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
