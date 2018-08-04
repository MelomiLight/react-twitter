import * as actions from './actions';
import { combineReducers } from 'redux';

const initialState = {
  active: null, // id of current user
  allIds: [],
  byId: {},
};

function active(state = initialState.active, action) {
  switch (action.type) {
    case actions.LOGIN:
      return action.payload.id;
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

function allIds(state = initialState.allIds, action) {
  switch (action.type) {
    case actions.LOGIN:
      return [...state, action.payload.id];
    case action.LOGOUT:
      return state;
    default:
      return state;
  }
}

function byId(state = initialState.byId, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actions.LOGOUT:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  active,
  allIds,
  byId,
});

// Selectors
// Probably better to use Reselect
export const isAuthenticated = state => state.active;
export const getUserById = (state, id) => state.byId[id];
