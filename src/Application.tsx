import {CssBaseline} from 'material-ui';
import {inject, Provider} from 'mobx-react';
import {HistoryAdapter, RouterView} from 'mobx-state-router';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {AppDrawer} from './components/Drawer';
import {RouterShell} from './pages/RouterShell';
import {RootStore} from './stores/root.store';
import {history} from './utils/history';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

const app: React.SFC = () => {
  return (
    <Provider rootStore={rootStore}>
      <div>
        <CssBaseline />
        <AppDrawer>
          <RouterShell />
        </AppDrawer>
      </div>
    </Provider>
  );
};

const hotApp = hot(module)(app);

export {hotApp as App};
