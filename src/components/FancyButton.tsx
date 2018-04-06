import {Button, withStyles} from 'material-ui';
import * as React from 'react';

// CSS injection into DOM
const classNameStyles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

const overrideWithClassNames = props => {
  return (
    <Button className={props.classes.button}>
      {props.children ? props.children : 'class names'}
    </Button>
  );
};

const classNamesFancyButton = withStyles(classNameStyles)(
  overrideWithClassNames,
);

// Material-UI CSS API Injection
const decorate = withStyles(() => ({
  label: {
    textTransform: 'capitalize' as 'capitalize',
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

interface IFancyProps {
  children?: React.ReactNode;
}

const classesFancyButton = decorate<IFancyProps>(({children, classes}) => (
    <Button classes={classes}>
      {children ? children : 'classes'}
    </Button>
));

export {
  classesFancyButton as ClassesFancyButton,
  classNamesFancyButton as ClassNamesFancyButton,
};
