import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

jest.mock('../../containers/Header', () => () => <h1>Header</h1>);

describe('Layout', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Layout>
        <p>children</p>
      </Layout>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
