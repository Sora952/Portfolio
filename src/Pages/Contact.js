import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Styles/Contact.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  },
  test: {
    margin: "auto",
    lineHeight: "90px",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <p>Mes adresses</p>
      <p>Mes numéros</p>
      <p>Mes mails</p>
      <p>Infos ect</p>
    
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.test}>
      <TextField id="standard-basic" label="Nom de l'entreprise" />
      <TextField id="standard-basic" label="Email recruteur" />
      <TextField id="standard-basic" label="Votre texte" multiline="true" />
      <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
        </div>
    </form>
    </div>
  );
}