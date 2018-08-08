import React from 'react';
import { connect } from 'react-redux';
import TweetInput from '../../components/TweetInput';
import { logout } from '../../modules/users/actions';
import { createTweet } from '../../modules/tweets/actions';
import * as fromUsers from '../../modules/users/reducer';
import * as fromTweets from '../../modules/tweets/reducer';
import Tweet from '../../components/Tweet';
import Timeline from '../../components/Timeline';
import sortByDatetime from '../../utils/datetime';

class Home extends React.Component {
  onSubmit = text => {
    const {
      createTweet,
      activeUser: { id: userId },
    } = this.props;
    createTweet({ userId, text });
  };

  render() {
    const { tweets } = this.props;

    return (
      <React.Fragment>
        <TweetInput onSubmit={this.onSubmit} />
        <Timeline>
          {tweets.map(tweet => (
            <Tweet {...tweet} key={tweet.id} />
          ))}
        </Timeline>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activeUser: fromUsers.getUserById(state.users, state.users.active),
  tweets: fromTweets
    .getAllTweets(state.tweets)
    .map(tweet => ({
      ...tweet,
      repliedTweet: fromTweets.getTweetById(state.tweets, tweet.replyToId),
      user: fromUsers.getUserById(state.users, tweet.userId),
    }))
    .sort(sortByDatetime),
});

const mapDispatchToProps = { logout, createTweet };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
