import * as actions from './actions';

const tweet = {
  id: null, // unique id of tweet
  createdAt: null, // datetime object of tweet's creation
  user: null, // user's id
  text: '', // content of the tweet
  replyToId: null, // if the tweet is a reply, id to the original tweet
};

const initialState = {
  allIds: [],
  byId: {},
};

export default function tweetsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_TWEET:
      return state;
    default:
      return state;
  }
}
