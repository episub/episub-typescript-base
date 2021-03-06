import {AppBar, Divider, Drawer, List, withStyles} from 'material-ui';
import {Clock, GestureTap, Home} from 'mdi-material-ui';
import * as React from 'react';
import {Route, Switch} from 'react-router';
import {AppToolbar, DrawerMenuItem} from '../components';
import {ButtonToolbar} from '../pages';

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
      <Switch>
        <Route path="/buttons" component={ButtonToolbar} />
        <Route path="/" component={AppToolbar} />
      </Switch>
    </AppBar>
    <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <DrawerMenuItem to="home" primary="Home" icon={<Home />} />
        <DrawerMenuItem to="clock" primary="Clock" icon={<Clock />} />
        <DrawerMenuItem to="buttons" primary="Buttons" icon={<GestureTap />} />
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children ? children : 'Empty'}
    </main>
  </div>
));

export {decoratedDrawer as AppDrawer};
