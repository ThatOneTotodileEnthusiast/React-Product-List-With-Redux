import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import * as actionCreators from '../../store/actions/layout';

import Card from '../../components/Card/Card';
import TitleBar from '../../components/TitleBar/TitleBar';

import classes from './Layout.modules.css';

/**
 * Layout Container, used for holding Cards & TitleBar
 */
const layout = props => {

/** Populate Props with API or Local call */
  useEffect(() => {
    props.onInitialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Default False. Turns true when CardList populated, allowing render */
  if (props.loaded) {
    return (
      <div className={classes.root}>
        <TitleBar
          title="Women's Tops"
          inputLabel="Filter By"
          open={props.op}
          closing={props.onSelectClosed}
          opening={props.onSelectOpened}
          label={props.lab}
          change={props.onLabelChange}
        />
        <Grid container>
          {props.clist.map(result => (
            <Card
              isSale={result.isSale}
              isExclusive={result.isExclusive}
              productName={result.productName}
              price={result.price}
              key={result.index}
              imgSrc={`/public/assets/images/${result.productImage}`}
            />
          ))}
        </Grid>
      </div>
    );
  }
  /** On API/Local load of data pending*/
  props.onLoading();
  return (
    <div className={classes.loading}>
      <CircularProgress />
      <div>{props.loading}</div>
    </div>
  );
};

layout.propTypes = {
  /** Filter Dropdown Label */
  lab: PropTypes.string,
  /** Boolean for Dropdown status */
  op: PropTypes.bool,
  /** List of Product Cards */
  clist: PropTypes.array,
  /** Status of Layout Component */
  loaded: PropTypes.bool,
  /** Message provided on Loading */
  loading: PropTypes.string,
};

const mapStateToProps = state => ({
  lab: state.label,
  op: state.open,
  clist: state.cardList,
  loaded: state.isLoaded,
  loading: state.loadingMessage,
});

const mapDispatchToProps = dispatch => ({
  /** 
   * Dispatches calls to initiate action creators
   */
  onInitialize: () => dispatch(actionCreators.initialize()),
  onLoading: () => dispatch(actionCreators.loading()),
  onLabelChange: event => dispatch(actionCreators.changeLabel(event)),
  onSelectOpened: () => dispatch(actionCreators.handleOpened()),
  onSelectClosed: () => dispatch(actionCreators.handleClosed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(layout);
