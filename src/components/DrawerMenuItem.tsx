import * as H from 'history';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui';
import {inject} from 'mobx-react';
import * as React from 'react';

interface IDrawerMenuItemProps {
  icon: React.ReactElement<any>;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  to: H.LocationDescriptor;
}

@inject('rootStore')
export class DrawerMenuItem extends React.Component<IDrawerMenuItemProps> {
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

  public handleClick = () => {
    const {rootStore: {routerStore}} = this.props;
    routerStore.goTo(this.props.to);
  };
}
