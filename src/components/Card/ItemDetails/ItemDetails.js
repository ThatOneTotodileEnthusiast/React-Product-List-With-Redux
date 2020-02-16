import React from 'react';

import Grid from '@material-ui/core/Grid';
import Aux from '../../../hoc/Auxilliary';
import classes from './ItemDetails.modules.css';

/**
 * ItemDetails Component - Includes Product Name and Price
 */
const itemDetails = props => (
  <Aux>
    <Grid item xs={6}>
      <span className={classes.labelSpan}>{props.productName}</span>
    </Grid>
    <Grid item xs={6}>
      <span className={classes.priceSpan}>{props.price}</span>
    </Grid>
  </Aux>
);

export default itemDetails;
