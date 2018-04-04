import * as H from 'history';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui';
import {inject} from 'mobx-react';
import * as React from 'react';
import {STORE_ROUTER} from '../constants';
import {RouterStore} from '../stores/RouterStore';

interface IDrawerMenuItemProps {
  icon: React.ReactElement<any>;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  to: H.LocationDescriptor;
}

@inject(STORE_ROUTER)
export class DrawerMenuItem extends React.Component<IDrawerMenuItemProps> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ListItem button={true} onClick={this.handleClick}>
        <ListItemIcon>{this.props.icon}</ListItemIcon>
        <ListItemText
          primary={this.props.primary}
          secondary={this.props.secondary}
        />
      </ListItem>
    );
  }

  private handleClick() {
    const router = this.props[STORE_ROUTER] as RouterStore;

    router.push(this.props.to as string);
  }
}
