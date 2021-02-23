import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: "9999"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: "#343A40",
  },
  navColor: {
    color: "white",
    outline: "none !important",
  },
  machin: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
        <div className={classes.machin}>
          <div>
        <NavLink exact to='/' style={{textDecoration: 'none',}}>
          <Button title='Acceuil' color="default" className={classes.navColor}>Acceuil</Button>
        </NavLink>
        <a style={{textDecoration: 'none', color: "white", fontWeight: "600"}} href='https://github.com/Sora952' target='_blank' rel='noreferrer noopener'>
          <Button title='Mon Github' color="default" className={classes.navColor}>Mon Github</Button>
        </a>
        <a style={{textDecoration: 'none', color: "white", fontWeight: "600"}} href='https://www.linkedin.com/in/camillebueno/' target='_blank' rel='noreferrer noopener'>
          <Button title='Mon Linkedin' color="default" className={classes.navColor}>Mon Linkedin</Button>
        </a>
        {/* <NavLink exact to='/crud-user'>
          <Button color="white" className={classes.navColor}>Voir un PokéCrud</Button>
        </NavLink> */}
        </div>
        <div style={{fontWeight: "500", display: "flex"}}>
          <span style={{marginRight: "15px"}}>camilleBueno952@gmail.com</span>
          <span>06 08 64 12 55</span>
        </div>
        </div>
        {/* <NavLink exact to='/project'>
          <Button color="white" className={classes.navColor}>Projets</Button>
        </NavLink> */}
        {/* <NavLink exact to='/contact'>
          <Button color="white" className={classes.navColor}>Me contacter</Button>
        </NavLink> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}