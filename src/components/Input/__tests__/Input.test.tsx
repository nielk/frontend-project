import * as React from 'react';

import { mount, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import Input from '../';
import InputButton from '../../IconButton';

describe('Input', () => {
  describe('Should match snapshot for', () => {
    test('default', () => {
      const cheerio = render(<Input />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('disabled', () => {
      const cheerio = render(<Input disabled />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with prefix', () => {
      const cheerio = render(<Input prefix="P" />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with suffix', () => {
      const cheerio = render(<Input />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('default password type', () => {
      const cheerio = render(<Input type="password" />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('password type with custom suffix', () => {
      const cheerio = render(<Input type="password" suffix="S" />);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with variants', () => {
      const cheerio = render(
        <div>
          <Input variant="alert" />
          <Input variant="success" />
          <Input variant="primary" />
          <Input variant="text" />
        </div>
      );
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
  });
  test('Should toggle visibility for password', () => {
    const wrapper = mount(<Input type="password" />);
    expect(
      wrapper
        .find('input')
        .getDOMNode()
        .getAttribute('type')
    ).toBe('password');
    wrapper.find(InputButton).simulate('click');
    expect(
      wrapper
        .find('input')
        .getDOMNode()
        .getAttribute('type')
    ).toBe('text');
  });
});
