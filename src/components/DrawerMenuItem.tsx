import {ListItem, ListItemIcon, ListItemText} from 'material-ui';
import * as React from 'react';
import {NavLink} from 'react-router-dom';

const MenuItem = props => {
  return (
    <ListItem button={true}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.primary} secondary={props.secondary} />
    </ListItem>
  );
};

const MenuItemLinked = props => {
  return (
    <NavLink
      to={props.to ? props.to : ''}
      style={{textDecoration: 'none'}}
    >
      <MenuItem
        primary={props.primary}
        secondary={props.secondary}
        icon={props.icon}
      />
    </NavLink>
  );
};

export class DrawerMenuItem extends React.Component<any> {
  public render() {
    if (this.props.to) {
      return (
        <MenuItemLinked
          to={this.props.to}
          primary={this.props.primary}
          secondary={this.props.secondary}
          icon={this.props.icon}
        />
      );
    }

    return (
      <MenuItem
        primary={this.props.primary}
        secondary={this.props.secondary}
        icon={this.props.icon}
      />
    );
  }
}
