import { v4 as uuid } from 'uuid';
import * as fromUsers from './reducer';

const scope = '@@users';

export const RECIEVE_AUTH = `${scope}/RECIEVE_AUTH`;
export const SIGNIN = `${scope}/SIGNIN`;
export const SIGNUP = `${scope}/SIGNUP`;
export const LOGIN = `${scope}/LOGIN`;
export const LOGOUT = `${scope}/LOGOUT`;

export const recieveAuth = () => ({
  type: RECIEVE_AUTH,
});

export const signin = id => ({
  type: SIGNIN,
  payload: {
    id,
  },
});

export const signup = username => ({
  type: SIGNUP,
  payload: {
    id: uuid(),
    username,
  },
});

export const login = username => (dispatch, getState) => {
  const { users } = getState();

  dispatch({ type: LOGIN, username });

  return Promise.resolve(fromUsers.getUserIdByUsername(users, username))
    .then(userId => {
      if (userId) {
        return dispatch(signin(userId));
      }
      return dispatch(signup(username));
    })
    .catch(reason => alert(`Failed to sign in! ${reason}`));
};

export const logout = () => ({
  type: LOGOUT,
});
