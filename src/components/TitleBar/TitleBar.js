import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DropdownList from './DropdownList/DropdownList';
import { ascending, descending, size, name, price } from '../../store/utility';

import classes from './TitleBar.modules.css';

/**
 * TitleBar Component - Contains title and DropdownList component 
 */
const titleBar = props => (
  <Grid container>
    {/* Title Bar */}
    <Grid item sm={9} xs={12}>
      <Typography className={classes.titleText}>{props.title}</Typography>
    </Grid>
    <Grid item sm={3} xs={12}>
      <DropdownList
        inputLabel={props.inputLabel}
        open={props.open}
        closing={props.closing}
        opening={props.opening}
        label={props.label}
        change={props.change}/>
    </Grid>
  </Grid>
);

export default titleBar;
