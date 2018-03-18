import * as React from 'react';
import {Welcome} from './components/Welcome';

const app = () => {
  return (
    <div>
      <Welcome name="User" />
    </div>
  );
};

export {app as App};
