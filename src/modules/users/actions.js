import { v4 as uuid } from 'uuid';

export const RECIEVE_AUTH = 'auth/RECIEVE_AUTH';
export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';

export const recieveAuth = () => ({
  type: RECIEVE_AUTH,
});

export const login = username => ({
  type: LOGIN,
  payload: {
    id: uuid(),
    username,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
