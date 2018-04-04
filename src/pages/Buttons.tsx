import {Card, CardContent, Grid, Toolbar, Typography} from 'material-ui';
import * as React from 'react';
import {
  ClassesFancyButton,
  ClassNamesFancyButton,
} from '../components/FancyButton';

const buttonToolbar: React.SFC = () => {
  return (
    <Toolbar>
      <Typography variant="title" color="inherit" style={{flex: 1}}>
        Fancy Buttons
      </Typography>
      <ClassesFancyButton />
    </Toolbar>
  );
};

const buttonPage: React.SFC = () => {
  return (
    <Grid container={true} spacing={16}>
      <Grid item={true}>
        <Card>
          <CardContent>
            <Typography paragraph={true}>
              Modify style using classNames method
            </Typography>
            <ClassNamesFancyButton />
            <Typography paragraph={true}>
              Modify style using classes method
            </Typography>
            <ClassesFancyButton />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export {buttonPage as ButtonPage, buttonToolbar as ButtonToolbar};
