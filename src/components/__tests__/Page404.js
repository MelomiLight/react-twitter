import React from 'react';
import renderer from 'react-test-renderer';
import Page404 from '../Page404';

jest.mock('react-router-dom');

describe('Page404', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Page404 />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
