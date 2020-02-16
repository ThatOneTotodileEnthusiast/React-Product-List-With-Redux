import React from 'react';

import Grid from '@material-ui/core/Grid';
import classes from './Card.modules.css';

import Tag from './Tag/Tag';
import ItemDetails from './ItemDetails/ItemDetails';

/**
 * Card Component - Contains Product Image, Tag & ItemDetails Component 
 */
const card = props => (
  <Grid item md={3} sm={6} xs={12} className={classes.card}>
    <img src={props.imgSrc} alt="" />
    <Grid container>
      <Tag isSale={props.isSale} isExclusive={props.isExclusive} />
      <ItemDetails productName={props.productName} price={props.price} />
    </Grid>
  </Grid>
);

export default card;
