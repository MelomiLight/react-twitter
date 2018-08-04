import * as actions from './actions';

const initialState = {
  token: null,
  id: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.RECIEVE_AUTH:
      return state;
    case actions.LOGIN:
      return state;
    case actions.LOGOUT:
      return state;
    default:
      return state;
  }
}
