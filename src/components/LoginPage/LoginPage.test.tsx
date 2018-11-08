import { shallow } from 'enzyme';
import * as React from 'react';

import LoginPage from './LoginPage';

test('renders component', () => {
  expect(shallow(<LoginPage />)).not.toBeNull();
});
