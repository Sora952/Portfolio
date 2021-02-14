import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography style={{color: "white"}} variant="body2" color="textSecondary">
      {"Camille © "}
      <Link style={{textDecoration: 'none', color: "white"}} color="inherit" href='https://github.com/Sora952'>
        Mon profil github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    position: "relative",
    bottom: "0",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer
        className={classes.footer}
        style={{ backgroundColor: "#343A40", bottom: "0"}}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" style={{color: "white"}}>
            camillebueno952@gmail.com
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
