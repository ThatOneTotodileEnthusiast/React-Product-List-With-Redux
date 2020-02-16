import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { ascending, descending, size, name, price } from '../../../store/utility';

import classes from './DropdownList.modules.css';

/**
 * DropdownList Component - Contains the following filter options
 * 1. Size (Small to Large) 
 * 2. Name (A to Z)
 * 3. Price (Low to High)
 * 4. Size (Large to Small)
 * 5. Name (Z to A)
 * 6. Price (High to Low)
 */
const dropdownList = props => (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          {props.inputLabel}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={props.open}
          onClose={props.closing}
          onOpen={props.opening}
          value={props.label}
          onChange={props.change}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={`${size} ${ascending}`}>
            Size (Small to Large)
          </MenuItem>
          <MenuItem value={`${name} ${ascending}`}>Name (A to Z)</MenuItem>
          <MenuItem value={`${price} ${ascending}`}>
            Price (Low to High)
          </MenuItem>
          <MenuItem value={`${size} ${descending}`}>
            Size (Large to Small)
          </MenuItem>
          <MenuItem value={`${name} ${descending}`}>Name (Z to A)</MenuItem>
          <MenuItem value={`${price} ${descending} `}>
            Price (High to Low)
          </MenuItem>
        </Select>
      </FormControl>
);

export default dropdownList;
