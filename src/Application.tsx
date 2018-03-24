import {Card, CardContent, CssBaseline, Grid, Typography} from 'material-ui';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Clock} from './components/Clock';
import {
  ClassesFancyButton,
  ClassNamesFancyButton,
} from './components/FancyButton';
import {Welcome} from './components/Welcome';

const app = () => {
  /* Padding is set on div to account for the negative margin of the grid.
  (default spacing for grid items is 8 */
  return (
    <div style={{padding: 16}}>
      <CssBaseline />
      <Grid container={true}>
        <Grid item={true} xs={3}>
          <Welcome name="User" />
        </Grid>
        <Grid item={true} xs={true}>
          <Clock />
        </Grid>
        <Grid item={true} xs={true}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Modify style using classNames method
              </Typography>
              <ClassNamesFancyButton />
              <Typography variant="body1">
                Modify style using classes method
              </Typography>
              <ClassesFancyButton />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
