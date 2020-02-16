import axios from 'axios';
import * as actionTypes from './actionTypes';
import productsJSON from '../../../public/assets/products.json';

/** Initialization via API call */
export const saveCards = response => ({
  type: actionTypes.INITIALIZE,
  arr: response,
});

/** Initialization via Offline JSON */
export const saveCardsFromOffline = response => ({
  type: actionTypes.INITIALIZE_OFFLINE,
  arr: response,
});

// Async call to API endpoint for Product data
export const initialize = () => dispatch => {
  axios
    .get('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
    .then(response => {
      dispatch(saveCards(response, true));
    })
    .catch(err => {
      // Load from offline JSON
      dispatch(saveCardsFromOffline(productsJSON));
    });
};

export const errorOccured = errorMessage => ({
  type: actionTypes.ERROR_OCCURED,
  val: errorMessage,
});

export const loading = () => ({
  type: actionTypes.LOADING,
});

export const changeLabel = event => ({
  type: actionTypes.CHANGE_LABEL,
  val: event.target.value,
});

export const handleClosed = () => ({
  type: actionTypes.HANDLE_CLOSED,
});

export const handleOpened = () => ({
  type: actionTypes.HANDLE_OPENED,
});
