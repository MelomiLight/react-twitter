import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  timeline: {
    padding: 0,
  },
});

const Timeline = ({ classes, children }) => (
  <ul className={classes.timeline}>{children}</ul>
);

export default withStyles(styles)(Timeline);
