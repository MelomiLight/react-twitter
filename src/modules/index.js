import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import users from './users';
import tweets from './tweets';

const rootReducer = combineReducers({
  users,
  tweets,
});

export default connectRouter(history)(rootReducer);
