import React from 'react';

import Grid from '@material-ui/core/Grid';
import classes from './Tag.modules.css';

/**
 * Tag Component - Contains one of the following custom styled tags
 * 1. Sale 
 * 2. Exclusive
 * If neither, returns empty span
 */
const tag = props => {
  let text = '';
  if (props.isSale) {
    text = 'Sale';
    return (
      <Grid item xs={12}>
        <span className={classes.saleStyle}>{text}</span>
      </Grid>
    );
  }
  if (props.isExclusive) {
    text = 'Exclusive';
    return (
      <Grid item xs={12}>
        <span className={classes.exclusiveStyle}>{text}</span>
      </Grid>
    );
  }
  return (
    <Grid item xs={12}>
      <span className={classes.defaultStyle} />
    </Grid>
  );
};

export default tag;
