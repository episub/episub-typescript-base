import * as React from 'react';
import * as ReactDOM from 'react-dom';
const App = () => {
  return (
    <div>
      <p>React here!</p>
      <p>React here! Again</p>
      <p>React here! Again</p>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
