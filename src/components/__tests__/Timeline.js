import React from 'react';
import renderer from 'react-test-renderer';
import Timeline from '../Timeline';

describe('Timeline', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Timeline>
        <li>tweet</li>
      </Timeline>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
