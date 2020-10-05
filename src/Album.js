import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as uiLink} from '@material-ui/core/Link';
import Post from './Post';
import Description from './Description';
import data from './data';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <uiLink color="inherit" href="#">
        Fanap React Course
      </uiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

export default function Album() {

  const [showCard, setShowCard] = useState(data[0]);
  const classes = useStyles();

  const onChooseCard = chosenCard => {
    setShowCard(data[chosenCard - 1]);
  };

  return (
    
    <React.Fragment>

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AlternateEmail className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            MohammadHadi Ahmadian
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Router>
              <Switch>
                <Route
                  path = "/description/:id"
                  render={() => (
                    <Description
                      card={showCard}
                    />
                  )}
                />

                <Route
                  path = "/"
                  render={() => (
                    data.map((index) => (
                      <Grid item key={index.id} xs={12} sm={6} md={4}>
                        <Post
                          id={index.id}
                          author={index.author}
                          title={index.title}
                          created={index.created}
                          cover={index.cover}
                          description={index.description}
                          chooseCard={onChooseCard}
                        />
                      </Grid>
                    )))}
                />
              </Switch>
            </Router>
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Copyright />
      </footer>
      
    </React.Fragment>
  );
}
