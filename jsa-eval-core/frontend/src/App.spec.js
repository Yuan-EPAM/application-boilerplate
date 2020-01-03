import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('test App ', () => {
  it('renders the App', () => {
    const appComponent = renderer.create(<App />);
    const tree = appComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  })
});
