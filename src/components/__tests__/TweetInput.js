import React from 'react';
import renderer from 'react-test-renderer';
import TweetInput from '../TweetInput';

describe('TweetInput', () => {
  it('renders correctly', () => {
    const component = renderer.create(<TweetInput />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
