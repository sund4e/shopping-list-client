import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

test('renders component', () => {
  expect(shallow(<App />).html()).toContain('Hello there');
});
