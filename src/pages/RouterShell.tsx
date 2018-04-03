import {inject} from 'mobx-react';
import {RouterView} from 'mobx-state-router';
import * as React from 'react';
import {ButtonPage} from './Buttons';
import {ClockPage} from './Clock';
import {HomePage} from './Home';

const viewMap = {
  buttons: <ButtonPage />,
  clock: <ClockPage />,
  home: <HomePage />,
};

@inject('rootStore')
export class RouterShell extends React.Component {
  public render(): JSX.Element {
    const {rootStore: {routerStore}} = this.props;

    return (
      <div>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </div>
    );
  }
}
