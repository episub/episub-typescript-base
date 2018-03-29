import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui';
import {Clock, GestureTap} from 'mdi-material-ui';
import * as React from 'react';
import {NavLink} from 'react-router-dom';

const drawerWidth = 240;

const decorate = withStyles(({palette, spacing, mixins}) => ({
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  content: {
    backgroundColor: palette.background.default,
    flexGrow: 1,
    padding: spacing.unit * 3,
  },
  drawerPaper: {
    position: 'relative' as 'relative',
    width: drawerWidth,
  },
  root: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden' as 'hidden',
    position: 'relative' as 'relative',
    width: '100%',
    zIndex: 1,
  },
  toolbar: mixins.toolbar,
}));

interface IDrawerProps {
  children?: React.ReactNode;
}

const decoratedDrawer = decorate<IDrawerProps>(({children, classes}) => (
  <div className={classes.root}>
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <NavLink to="/clock" style={{textDecoration: 'none'}}>
          <ListItem button={true}>
            <ListItemIcon>
              <Clock />
            </ListItemIcon>
            <ListItemText primary="Clock" secondary="Link Here" />
          </ListItem>
        </NavLink>
        <NavLink to="/buttons" style={{textDecoration: 'none'}}>
          <ListItem button={true}>
            <ListItemIcon>
              <GestureTap />
            </ListItemIcon>
            <ListItemText primary="Buttons" />
          </ListItem>
        </NavLink>
        <ListItem button={true}>
          <ListItemIcon>
            <GestureTap />
          </ListItemIcon>
          <ListItemText primary="Non Link" secondary="No Link Here" />
        </ListItem>
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children ? children : 'Empty'}
    </main>
  </div>
));

export {decoratedDrawer as AppDrawer};
