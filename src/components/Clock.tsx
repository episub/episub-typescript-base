import * as React from 'react';

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
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>Application has been running for {this.state.live} seconds.</h3>
      </div>
    );
  }

  public componentDidMount() {
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
