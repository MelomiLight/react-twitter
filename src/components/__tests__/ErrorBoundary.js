import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <ErrorBoundary>
        <h1>Heading</h1>
      </ErrorBoundary>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with error', () => {
    const Broken = () => {
      throw new Error('boom!');
    };
    console.error = jest.fn();

    const component = renderer.create(
      <ErrorBoundary>
        <Broken />
      </ErrorBoundary>,
    );

    expect(console.error).toBeCalled();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
