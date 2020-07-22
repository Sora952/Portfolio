import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <NavLink exact to='/'>
          <Button color="inherit">Acceuil</Button>
        </NavLink>
        <NavLink exact to='/project'>
          <Button color="inherit">Projets</Button>
        </NavLink>
        <NavLink exact to='/'>
          <Button color="inherit">Me contacter</Button>
        </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}