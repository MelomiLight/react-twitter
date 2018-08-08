import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout, getUserById } from '../../modules/users';
import {
  createTweet,
  getTweetById,
  getRepliesById,
} from '../../modules/tweets';
import { getTweetMeta } from '../../modules';
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
      <React.Fragment>
        <Tweet {...tweet} highlighted />
        {hasReplies && (
          <Timeline>
            {replies.map(reply => (
              <Tweet {...reply} key={reply.id} />
            ))}
          </Timeline>
        )}
        {activeUser && <TweetInput onSubmit={this.onSubmit} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, { match: { params } }) => ({
  activeUser: getUserById(state.users, state.users.active),
  tweet: getTweetMeta(state, getTweetById(state.tweets, params.tweetId)),
  replies: getRepliesById(state.tweets, params.tweetId).map(tweet =>
    getTweetMeta(state, tweet),
  ),
});

const mapDispatchToProps = { createTweet, logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetPage);
