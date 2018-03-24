import * as Debug from 'debug';
import {Card, CardContent, Typography} from 'material-ui';
import * as React from 'react';

const logger = Debug('component:Clock');

interface IClockState {
  date: Date;
  live: number;
}

export class Clock extends React.Component<any, IClockState> {
  private timerID: any;
  constructor(props: any) {
    super(props);
    this.state = {date: new Date(), live: 0};
  }

  public render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="title">Clock</Typography>
          <Typography variant="display1">
            {this.state.date.toLocaleTimeString()}
          </Typography>
          <Typography variant="body1">
            Runtime: {this.state.live} sec
          </Typography>
        </CardContent>
      </Card>
    );
  }

  public componentDidMount() {
    logger('Clock Loaded');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  private tick() {
    this.setState(prevState => ({
      date: new Date(),
      live: prevState.live + 1,
    }));
  }
}
