import * as React from 'react';
import * as ReactDOM from 'react-dom';
const APP = () => {
  return (
    <div>
      <p>React here!</p>
      <p>React here! Again</p>
      <p>React here! Again</p>
      <p>React here! Even More</p>
    </div>
  );
};
ReactDOM.render(<APP />, document.getElementById('app'));
