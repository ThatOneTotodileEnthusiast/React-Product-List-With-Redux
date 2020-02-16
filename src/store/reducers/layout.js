import { fromJS } from 'immutable';
import {
  updateObject,
  newCardList,
  defaultSort,
  defaultLoadingMessage,
} from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  label: '',
  open: false,
  cardList: ['', '', '', '', '', '', '', ''],
  isLoaded: false,
  loadingMessage: '',
  hasError: false,
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return updateObject(state, {
        label: defaultSort,
        cardList: newCardList(fromJS(action.arr).toJS().data, defaultSort),
        isLoaded: true,
      });
    case actionTypes.INITIALIZE_OFFLINE:
      return updateObject(state, {
        label: defaultSort,
        cardList: newCardList(fromJS(action.arr).toJS(), defaultSort),
        isLoaded: true,
      });
    case actionTypes.LOADING:
      return updateObject(state, {
        loadingMessage: defaultLoadingMessage,
      });
    case actionTypes.CHANGE_LABEL:
      return updateObject(state, {
        label: action.val,
        cardList: newCardList([...state.cardList], action.val),
      });
    case actionTypes.HANDLE_CLOSED:
      return updateObject(state, { open: false });
    case actionTypes.HANDLE_OPENED:
      return updateObject(state, { open: true });
    case actionTypes.ERROR_OCCURED:
      return updateObject(state, { hasError: true, errorMessage: action.val });
  }
  return state;
};

export default reducer;
