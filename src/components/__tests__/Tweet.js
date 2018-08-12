import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from '../Tweet';

jest.mock('moment', () => time => ({
  fromNow: () => `${time} ago`,
}));

jest.mock('react-router-dom');

describe('Tweet', () => {
  const tweet = {
    id: '123',
    text: 'Hello, world!',
    createdAt: 1,
    user: {
      id: '321',
      username: 'user2',
    },
  };

  const reply = {
    id: '456',
    text: 'Hello!',
    createdAt: 2,
    user: {
      id: '654',
      username: 'user2',
    },
  };

  it('renders correctly', () => {
    const component = renderer.create(<Tweet {...tweet} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders highlighted tweet', () => {
    const component = renderer.create(<Tweet {...tweet} highlighted />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders reply', () => {
    const component = renderer.create(
      <Tweet {...reply} replyToId={tweet.id} repliedTweet={tweet} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
