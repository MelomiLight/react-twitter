import * as actions from './actions';

const initialState = {
  allIds: [],
  byId: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_USER:
      return state;
    default:
      return state;
  }
}
