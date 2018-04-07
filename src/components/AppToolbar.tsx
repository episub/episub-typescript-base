import {Toolbar, Typography} from 'material-ui';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {STORE_ROUTER} from '../constants';
import {RouterStore} from '../stores';

@inject(STORE_ROUTER)
@observer
export class AppToolbar extends React.Component {
  public render() {
    const router = this.props[STORE_ROUTER] as RouterStore;

    return (
      <Toolbar>
        <Typography variant="title" color="inherit">
          {router.location ? router.location.pathname : 'Unknown Location'}
        </Typography>
      </Toolbar>
    );
  }
}
