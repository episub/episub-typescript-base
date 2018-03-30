import {Grid} from 'material-ui';
import * as React from 'react';
import {Welcome} from '../components/Welcome';

const homePage = () => {
  return (
    <Grid container={true} spacing={8}>
      <Grid item={true} xs={true}>
        <Welcome name="User" />
      </Grid>
    </Grid>
  );
};

export {homePage as HomePage};
