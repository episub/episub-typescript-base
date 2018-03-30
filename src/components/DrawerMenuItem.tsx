import * as H from 'history';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui';
import * as React from 'react';
import {NavLink} from 'react-router-dom';

interface IMenuItemProps {
  icon: React.ReactElement<any>;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

const MenuItem: React.SFC<IMenuItemProps> = props => {
  return (
    <ListItem button={true}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.primary} secondary={props.secondary} />
    </ListItem>
  );
};

interface IDrawerMenuItemProps {
  to: H.LocationDescriptor;
}

export class DrawerMenuItem extends React.Component<
  IMenuItemProps & IDrawerMenuItemProps
> {
  public render() {
    const menuItem = (
      <MenuItem
        primary={this.props.primary}
        secondary={this.props.secondary}
        icon={this.props.icon}
      />
    );

    return (
      <NavLink to={this.props.to} style={{textDecoration: 'none'}}>
        {menuItem}
      </NavLink>
    );
  }
}
