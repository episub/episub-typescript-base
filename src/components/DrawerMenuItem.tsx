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

export class DrawerMenuItem extends React.Component<any> {
  public render() {
    const menuItem = (
      <MenuItem
        primary={this.props.primary}
        secondary={this.props.secondary}
        icon={this.props.icon}
      />
    );

    // If we are given a link 'to', then wrap in NavLink, otherwise return just component
    if (this.props.to) {
      return (
        <NavLink to={this.props.to} style={{textDecoration: 'none'}}>
          {menuItem}
        </NavLink>
      );
    }

    return menuItem;
  }
}
