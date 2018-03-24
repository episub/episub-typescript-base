import * as debug from 'debug';
import {Card, CardContent, Typography} from 'material-ui';
import * as React from 'react';

const logger = debug('component:Welcome');

const welcome = props => {
  logger('Welcome Loaded');

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
