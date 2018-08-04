import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import auth from './auth';
import users from './users';
import tweets from './tweets';

const rootReducer = combineReducers({
  auth,
  users,
  tweets,
});

export default connectRouter(history)(rootReducer);
