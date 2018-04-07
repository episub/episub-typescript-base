import {Card, CardContent, Typography} from 'material-ui';
import * as React from 'react';

interface IWelcomeProps {
  name: string;
}

const welcome: React.SFC<IWelcomeProps> = props => {
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
