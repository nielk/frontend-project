import * as React from 'react';

import { hot } from 'react-hot-loader';

import { css, cx } from 'emotion';
import memoizeOne from 'memoize-one';
import { Omit } from 'react-redux';

import { Consumer, Theme } from '../../theme';
import IconButton from '../IconButton';
import View from '../Icons/View';
import ViewOff from '../Icons/ViewOff';

/**
 * Props for the Input component
 */
export type InputProps = {
  /**
   * Text color
   */
  variant?: keyof Theme['colors'];
  /**
   * Element to appear as prefix adornment
   */
  prefix?: React.ReactNode;
  /**
   * Element to appear as suffix adornment
   */
  suffix?: React.ReactNode;
  /**
   * Ref to the underlying input component (just in case)
   */
  innerRef?: React.Ref<HTMLInputElement>;
} & Omit<React.HTMLProps<HTMLInputElement>, 'prefix'>;

export type InputState = {
  showPassword?: boolean;
};

/**
 * Allows to render a styled Input
 * Please refer to the styleguide for more info
 */
class Input extends React.Component<InputProps, InputState> {
  state: InputState = {};

  /**
   * Allows to toggle password visibility
   * To bind to password type default suffix
   */
  toggleShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  /**
   * Resolves the appropriate type of input (allows to trigger password visibility)
   */
  get type() {
    const { type } = this.props;
    const { showPassword } = this.state;
    if (!type || type !== 'password') {
      return type;
    }
    return showPassword ? 'text' : type;
  }

  /**
   * Get the supplied suffix or default suffix View/ViewOff for password type inputs
   */
  get suffix() {
    const { type, suffix } = this.props;
    const { showPassword } = this.state;
    if (!suffix && type === 'password') {
      return (
        <IconButton onClick={this.toggleShowPassword} backgroundColor="transparent" color="placeholder">
          {showPassword ? <ViewOff /> : <View />}
        </IconButton>
      );
    }
    return suffix;
  }

  render() {
    const {
      variant = 'text',
      suffix: _suffix,
      type: _type,
      prefix,
      className,
      innerRef,
      ...props
    } = this.props;
    const { suffix, type } = this;
    return (
      <Consumer>
        {(theme) => {
          const classNames = cx(wrapperStyles(theme), className);
          const inputClasses = cx(inputStyles(theme, variant), !!prefix && inputWithPrefixStyles);
          return (
            <div className={classNames}>
              {prefix && <span className={adornmentStyles}>{prefix}</span>}
              <input type={type} className={inputClasses} ref={innerRef} {...props} />
              {suffix && <span className={adornmentStyles}>{suffix}</span>}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default hot(module)(Input);

/**
 * Styles for the div wrapper of input
 */
const wrapperStyles = memoizeOne(({ colors }: Theme) => {
  return css`
    display: flex;
    width: 100%;
    height: 44px;
    border-radius: 10px;
    background-color: ${colors.input};
    align-items: center;
    align-content: center;
    border: 2px solid transparent;
    :focus-within {
      border: 2px solid ${colors.focused};
    }
  `;
});
/**
 * Controls input appearence
 */
const inputStyles = memoizeOne(({ colors }: Theme, variant: InputProps['variant']) => {
  return css`
    flex: 1;
    background-color: ${colors.input};
    max-width: calc(100% - 75px);
    font-size: 15px;
    line-height: 1.33;
    color: ${colors[variant!]};
    border-radius: 10px;
    margin: 0 14px;
    border: unset;
    caret-color: ${colors.melrose};
    :focus {
      outline: none;
    }
    :disabled {
      color: ${colors.disabled};
    }
    ::placeholder {
      color: ${colors.placeholder};
    }
  `;
});
/**
 * Adornments (suffix & prefix) styles
 */
const adornmentStyles = css`
  margin: 0 14px;
`;
/**
 * Patch for input with has a prefix
 */
const inputWithPrefixStyles = css`
  margin: 0;
`;
