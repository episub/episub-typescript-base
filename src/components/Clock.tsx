import * as Debug from 'debug';
import {Card, CardContent, Typography} from 'material-ui';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {STORE_TIME} from '../constants';
import {TimeStore} from '../stores';

const logger = Debug('component:Clock');

@inject(STORE_TIME)
@observer
export class Clock extends React.Component {
  private timerID: any;
  private readonly timerMilliseconds = 1000;

  public render() {
    const time = this.props[STORE_TIME] as TimeStore;

    return (
      <Card>
        <CardContent>
          <Typography variant="title">Clock</Typography>
          <Typography variant="display1">
            {time.lastTick.toLocaleTimeString()}
          </Typography>
          <Typography variant="body1">
            Runtime: {time.activeSeconds} sec
          </Typography>
        </CardContent>
      </Card>
    );
  }

  public componentDidMount() {
    logger('Clock Loaded');
    this.timerID = setInterval(() => this.tick(), this.timerMilliseconds);
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  private tick() {
    const time = this.props[STORE_TIME] as TimeStore;
    time.incrementActiveSeconds(this.timerMilliseconds / 1000);
  }
}
