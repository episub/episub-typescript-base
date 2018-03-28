import {Card, CardContent, Grid, Typography} from 'material-ui';
import * as React from 'react';
import {
  ClassesFancyButton,
  ClassNamesFancyButton,
} from '../components/FancyButton';
import {Welcome} from '../components/Welcome';

const buttonPage = () => {
  return (
    <Grid container={true} spacing={16}>
      <Grid item={true} xs={3}>
        <Welcome name="User" />
      </Grid>
      <Grid item={true}>
        <Card>
          <CardContent>
            <Typography variant="body2">
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
  );
};

export {buttonPage as ButtonPage};
