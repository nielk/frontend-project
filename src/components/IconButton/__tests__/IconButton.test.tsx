import * as React from 'react';

import { mount, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import IconButton from '../';
import View from '../../Icons/View';

describe('IconButton', () => {
  describe('Should match snapshot for', () => {
    test('default', () => {
      const cheerio = render(<IconButton />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('clickable', () => {
      const cb = jest.fn();
      const cheerio = render(<IconButton onClick={cb} />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with icon', () => {
      const cheerio = render(
        <IconButton>
          <View />
        </IconButton>
      );
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with colors', () => {
      const cheerio = render(
        <div>
          <IconButton backgroundColor="alert" color="primary">
            <View />
          </IconButton>
          <IconButton backgroundColor="success" color="disabled">
            <View />
          </IconButton>
          <IconButton backgroundColor="primary" color="white">
            <View />
          </IconButton>
          <IconButton backgroundColor="transparent" color="melrose">
            <View />
          </IconButton>
          <IconButton backgroundColor="melrose" color="input">
            <View />
          </IconButton>
        </div>
      );
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
  });
  test('should be clickable button with onClick prop', () => {
    const cb = jest.fn();
    const cheerio = mount(<IconButton onClick={cb} />);
    expect(cheerio.find('button')).toHaveLength(1);
    cheerio.simulate('click');
    expect(cb).toBeCalled();
  });
});
