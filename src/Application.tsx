import {Grid} from 'material-ui';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Clock} from './components/Clock';
import {Welcome} from './components/Welcome';

const app = () => {
  return (
    <div>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={3}>
          <Welcome name="User" />
        </Grid>
        <Grid item={true} xs={3}>
          <Clock />
        </Grid>
      </Grid>
    </div>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
