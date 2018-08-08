import React from 'react';
import { withStyles, CssBaseline, Grid } from '@material-ui/core';
import Header from '../../containers/Header';

const styles = theme => ({
  root: {
    paddingTop: 64,
  },
  page: {
    marginTop: theme.spacing.unit * 4,
  },
});

const Layout = ({ classes, children }) => (
  <main className={classes.root}>
    <CssBaseline />
    <Header />
    <Grid container justify="center" className={classes.page}>
      <Grid item xs={11} sm={6} md={4}>
        {children}
      </Grid>
    </Grid>
  </main>
);

export default withStyles(styles)(Layout);
