import {CssBaseline} from 'material-ui';
import * as React from 'react';

/*
This is a useful component for adding extra higher order components
that might be needed to wrap the whole application for example a debug
component like 'mobx-react-devtools'
*/
export class Root extends React.Component<any, any> {
  public render() {
    return (
      <div className="container">
        <CssBaseline />
        {this.props.children}
      </div>
    );
  }
}
