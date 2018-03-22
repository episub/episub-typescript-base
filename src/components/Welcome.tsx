import {Card, CardContent, Typography} from 'material-ui';
import * as React from 'react';

const welcome = props => {
  return (
    <Card>
      {' '}
      <CardContent>
        <Typography variant="display1">Hello, {props.name}</Typography>
      </CardContent>
    </Card>
  );
};

export {welcome as Welcome};
