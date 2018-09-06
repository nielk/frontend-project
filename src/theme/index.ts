import * as React from 'react';

import DefaultTheme, { Theme } from './default-theme';

import './css-baseline';

const { Provider, Consumer } = React.createContext(DefaultTheme);

export { Theme, Provider, Consumer };
