import React from 'react';
import { connect } from 'react-redux';
import TweetInput from '../../components/TweetInput';
import { logout } from '../../modules/users/actions';
import { createTweet } from '../../modules/tweets/actions';
import * as fromUser from '../../modules/users/reducer';
import * as fromTweets from '../../modules/tweets/reducer';
import Header from '../../components/Header';
import Tweet from '../../components/Tweet';
import Timeline from '../../components/Timeline';

class Home extends React.Component {
  onSubmit = text => {
    const {
      createTweet,
      activeUser: { id: userId },
    } = this.props;
    createTweet({ userId, text });
  };

  render() {
    const { activeUser, logout, tweets, tweetsById } = this.props;

    return (
      <div>
        <Header user={activeUser} onClick={logout} />
        <TweetInput onSubmit={this.onSubmit} />
        <Timeline>
          {tweets.map(tweet => (
            <Tweet
              {...tweet}
              key={tweet.id}
              repliedTweet={tweetsById[tweet.replyToId]}
            />
          ))}
        </Timeline>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeUser: fromUser.getUserById(state.users, state.users.active),
  tweets: fromTweets.getAllTweets(state.tweets),
  tweetsById: state.tweets.byId,
});

const mapDispatchToProps = { logout, createTweet };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
