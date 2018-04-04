import {createBrowserHistory} from 'history';
import {Provider} from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './Application';
import {createStores} from './stores/createStore';

// Enable display of component logs
localStorage.debug = 'component:*';

// Prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history);

// Render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
