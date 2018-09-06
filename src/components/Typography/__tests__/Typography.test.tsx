import * as React from 'react';

import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import Typography from '../';

describe('Button', () => {
  describe('Should match snapshot for', () => {
    test('default', () => {
      const cheerio = render(<Typography>Hello</Typography>);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('disabled', () => {
      const cheerio = render(<Typography disabled>Hello</Typography>);
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with variants', () => {
      const cheerio = render(
        <div>
          <Typography variant="placeholder">Placeholder</Typography>
          <Typography variant="table-item">Table Item</Typography>
          <Typography variant="table-value">Table Value</Typography>
          <Typography variant="link">Text Link</Typography>
          <Typography variant="link-cancel">Text Link - Cancel</Typography>
          <Typography variant="caption">Caption</Typography>
          <Typography variant="breadcrumb">Breadcrumb navigation</Typography>
        </div>
      );
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
    test('with colors', () => {
      const cheerio = render(
        <div>
          <Typography color="text">I am text</Typography>
          <Typography color="primary">I am primary</Typography>
          <Typography color="placeholder">I am placeholder</Typography>
          <Typography color="alert">I am alert</Typography>
          <Typography color="success">I am success</Typography>
          <Typography color="warning">I am warning</Typography>
        </div>
      );
      expect(renderToJson(cheerio)).toMatchSnapshot();
    });
  });
});
