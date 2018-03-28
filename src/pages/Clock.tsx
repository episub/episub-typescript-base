import {Grid} from 'material-ui';
import * as React from 'react';
import {Clock} from '../components/Clock';

const clockPage = () => {
  return (
    <Grid container={true} spacing={8}>
      <Grid item={true} xs={true}>
        <Clock />
      </Grid>
    </Grid>
  );
};

export {clockPage as ClockPage};
