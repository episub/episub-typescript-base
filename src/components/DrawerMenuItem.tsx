import * as H from 'history';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui';
import * as React from 'react';
import {NavLink} from 'react-router-dom';

interface IDrawerMenuItemProps {
  icon: React.ReactElement<any>;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  to: H.LocationDescriptor;
}

export class DrawerMenuItem extends React.Component<IDrawerMenuItemProps> {
  public render() {
    return (
      <ListItem component={NavLink} to={this.props.to} button={true}>
        <ListItemIcon>{this.props.icon}</ListItemIcon>
        <ListItemText
          primary={this.props.primary}
          secondary={this.props.secondary}
        />
      </ListItem>
    );
  }
}
