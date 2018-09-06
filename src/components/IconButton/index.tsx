import * as React from 'react';

import { hot } from 'react-hot-loader';

import { css, cx } from 'emotion';
import memoizeOne from 'memoize-one';
import { Omit } from 'react-redux';

import { Consumer, Theme } from '../../theme';

/**
 * Props for IconButton component
 */
export type IconButtonProps = {
  /**
   * Size of button
   */
  size?: keyof Theme['sizes'];
  /**
   * Background color
   */
  backgroundColor?: keyof Theme['styles']['bgGradients'];
  /**
   * Foreground color
   */
  color?: keyof Theme['colors'];
  /**
   * Ref to the underlying span (no onClick property) or button (with onClick property) component
   */
  innerRef?: React.Ref<HTMLSpanElement | HTMLButtonElement>;
} & (Omit<React.HTMLProps<HTMLButtonElement>, 'size'> | Omit<React.HTMLProps<HTMLSpanElement>, 'size'>);

/**
 * IconButton component is a circle shaped button for small content
 */
const IconButton = ({
  size = 'sm',
  backgroundColor = 'primary',
  color,
  className,
  onClick,
  innerRef,
  ...props
}: IconButtonProps) => {
  color = color || (backgroundColor === 'transparent' ? 'icon' : 'white');
  return (
    <Consumer>
      {(theme) => {
        const classNames = cx(styles(theme, size, backgroundColor, color, !!onClick), className);
        if (!onClick) {
          return <span ref={innerRef} className={classNames} {...props} />;
        }
        return <button ref={innerRef} className={classNames} onClick={onClick} {...props as any} />;
      }}
    </Consumer>
  );
};

export default hot(module)(IconButton);

const styles = memoizeOne(
  (
    { styles: { bgGradients }, colors, sizes }: Theme,
    size: IconButtonProps['size'],
    variant: IconButtonProps['backgroundColor'],
    color: IconButtonProps['color'],
    clickable?: boolean
  ) => {
    const length = sizes[size!];
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 0;
      border: none;
      width: ${length}px;
      height: ${length}px;
      color: ${colors[color!]};
      cursor: ${clickable ? 'pointer' : 'default'};
      pointer-events: ${clickable ? 'all' : 'none'};
      ${bgGradients[variant!]};
      & > * {
        width: ${length - 4}px;
        height: ${length - 4}px;
      }
    `;
  }
);
