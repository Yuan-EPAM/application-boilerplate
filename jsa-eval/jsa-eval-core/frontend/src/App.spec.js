import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';

import App from './App';

describe('test App ', () => {
  it('renders the App', () => {
    const appComponent = renderer.create(<App />);
    let tree = appComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
