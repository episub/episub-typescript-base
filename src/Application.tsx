import * as React from 'react';
import {hot} from 'react-hot-loader';
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

const hotApp = hot(module)(app);

export {hotApp as App};
