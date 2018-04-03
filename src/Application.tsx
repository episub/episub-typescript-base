import {CssBaseline} from 'material-ui';
import {inject, Provider} from 'mobx-react';
import {HistoryAdapter, RouterView, RouterViewProps} from 'mobx-state-router';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {AppDrawer} from './components/Drawer';
import {ButtonPage} from './pages/Buttons';
import {ClockPage} from './pages/Clock';
import {HomePage} from './pages/Home';
import {RootStore} from './stores/root.store';
import {history} from './utils/history';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const viewMap = {
  buttons: <ButtonPage />,
  clock: <ClockPage />,
  home: <HomePage />,
};

@inject('rootStore')
class ShellBase extends React.Component {
  public render(): JSX.Element {
    const {rootStore: {routerStore}} = this.props;

    return (
      <div>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </div>
    );
  }
}

const app: React.SFC = () => {
  return (
    <Provider rootStore={rootStore}>
      <div>
        <CssBaseline />
        <AppDrawer>
          <ShellBase />
        </AppDrawer>
      </div>
    </Provider>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
