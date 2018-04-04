import * as React from 'react';

export class Root extends React.Component<any, any> {
  public renderDevTool() {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }
    // tslint:disable-next-line:no-require-imports
    const DevTools = require('mobx-react-devtools').default;

    return <DevTools />;
  }

  public render() {
    return (
      <div className="container">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}
