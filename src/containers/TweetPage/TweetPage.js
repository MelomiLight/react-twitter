import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../modules/users/actions';
import { createTweet } from '../../modules/tweets/actions';
import * as fromUser from '../../modules/users/reducer';
import * as fromTweets from '../../modules/tweets/reducer';
import Header from '../../components/Header';
import TweetInput from '../../components/TweetInput';
import Tweet from '../../components/Tweet';
import Timeline from '../../components/Timeline';

class TweetPage extends React.Component {
  onSubmit = text => {
    const {
      match: { params },
      activeUser,
      createTweet,
    } = this.props;

    createTweet({
      userId: activeUser.id,
      replyToId: params.tweetId,
      text,
    });
  };

  render() {
    const { tweet, replies, activeUser, logout } = this.props;
    const hasReplies = replies.length > 0;

    if (!tweet) {
      return <Redirect to="/404" />;
    }

    return (
      <div>
        <Header user={activeUser} onClick={logout} />
        <Tweet {...tweet} highlighted />
        {hasReplies && (
          <Timeline>
            {replies.map(reply => (
              <Tweet {...reply} key={reply.id} />
            ))}
          </Timeline>
        )}
        {activeUser && <TweetInput onSubmit={this.onSubmit} />}
      </div>
    );
  }
}

const mapStateToProps = (state, { match: { params } }) => ({
  activeUser: fromUser.getUserById(state.users, state.users.active),
  tweet: fromTweets.getTweetById(state.tweets, params.tweetId),
  replies: fromTweets.getRepliesById(state.tweets, params.tweetId),
});

const mapDispatchToProps = { createTweet, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetPage);
