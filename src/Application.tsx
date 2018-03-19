import * as React from 'react';
import {Clock} from './components/Clock';
import {Welcome} from './components/Welcome';

const app = () => {
  return (
    <div>
      <Welcome name="User" />
      <Clock />
    </div>
  );
};

export {app as App};
