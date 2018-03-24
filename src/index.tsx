import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './Application';

// Enable display of component logs
localStorage.debug = 'component:*';

ReactDOM.render(<App />, document.getElementById('app'));
