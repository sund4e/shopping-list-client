import { shallow } from 'enzyme';
import * as React from 'react';

import Button from './Button';

const onClickMock = jest.fn();

const render = (children?: React.ReactNode) => {
  const props = {
    onClick: onClickMock
  };
  return shallow(<Button {...props}>{children}</Button>);
};

describe('Button', () => {
  test('renders with children', () => {
    const child = 'Hello there!';
    const element = render(child);
    expect(element.html()).toContain(child);
  });

  test('calls onClick when clicked', () => {
    const element = render();
    element.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
