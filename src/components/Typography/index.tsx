import * as React from 'react';

import { hot } from 'react-hot-loader';

import { css, cx } from 'emotion';
import memoizeOne from 'memoize-one';

import { Consumer, Theme } from '../../theme';

/**
 * Defines Typography variants
 */
export type TypographyVariant =
  | 'main-title'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'default'
  | 'label'
  | 'placeholder'
  | 'table-item'
  | 'table-value'
  | 'link'
  | 'link-cancel'
  | 'caption'
  | 'breadcrumb';

/**
 * Map to adjust element for each variant of Typography
 */
const variantMap: { [P in TypographyVariant]: keyof React.ReactHTML } = {
  'main-title': 'h1',
  headline2: 'h2',
  headline3: 'h3',
  headline4: 'h4',
  default: 'p',
  label: 'label',
  placeholder: 'span',
  'table-item': 'span',
  'table-value': 'span',
  link: 'a',
  'link-cancel': 'a',
  caption: 'span',
  breadcrumb: 'span'
};

/**
 * Typography component props
 */
export type TypographyProps = {
  /**
   * Chooses a variant of Typography
   */
  variant?: TypographyVariant;
  /**
   * Maps the color from theme
   */
  color?: keyof Theme['colors'];
  /**
   * Shorthand for text-align css prop
   */
  align?: React.CSSProperties['textAlign'];
  /**
   * Shorthand for flex css prop
   * @todo obsolete?
   */
  flex?: number;
  /**
   * Shorthand for text-transform css prop
   */
  transform?: React.CSSProperties['textTransform'];
} & (
  | React.HTMLProps<HTMLHeadingElement>
  | React.HTMLProps<HTMLParagraphElement>
  | React.HTMLProps<HTMLAnchorElement>
  | React.HTMLProps<HTMLSpanElement>
  | React.HTMLProps<HTMLLabelElement>);

class Typography extends React.Component<TypographyProps> {
  static defaultProps: Partial<TypographyProps> = {
    variant: 'default'
  };

  /**
   * Allows to generate an appropriate color classname
   * @param theme Theme
   * @param color color
   */
  getColorClass(theme: Theme, color: TypographyProps['color']) {
    return colorStyle(theme, color);
  }

  /**
   * Allows to choose an appropiate classname without disrupting memoization
   * @param theme Theme
   */
  getVariantStyle(theme: Theme) {
    switch (this.props.variant) {
      case 'main-title':
        return mainTitleStyle(theme);
      case 'headline2':
        return headline2Style(theme);
      case 'headline3':
        return headline3Style(theme);
      case 'headline4':
        return headline4Style(theme);
      case 'label':
        return labelStyle(theme);
      case 'placeholder':
        return placeholderStyle(theme);
      case 'table-item':
        return tableItemStyle(theme);
      case 'table-value':
        return tableValueStyle(theme);
      case 'link':
        return linkStyle(theme);
      case 'link-cancel':
        return linkCancelStyle(theme);
      case 'caption':
        return captionStyle(theme);
      case 'breadcrumb':
        return breadcrumbStyle(theme);
      default:
        return defaultStyle(theme);
    }
  }

  render() {
    const { variant, align, color, className, flex, transform, ...props } = this.props;
    return (
      <Consumer>
        {(theme) => {
          const classNames = cx(
            this.getVariantStyle(theme),
            this.getColorClass(theme, color),
            transform && transformStyle(transform),
            align && alignStyle(align),
            typeof flex !== 'undefined' && flexStyle(flex),
            className
          );
          return React.createElement(variantMap[variant!], { className: classNames, ...props });
        }}
      </Consumer>
    );
  }
}

export default hot(module)(Typography);

const colorStyle = memoizeOne(({ colors }: Theme, color: TypographyProps['color']) => {
  if (!color) {
    return '';
  }
  return css`
    color: ${colors[color]};
  `;
});
const transformStyle = memoizeOne((transform: TypographyProps['transform']) => {
  return css`
    text-transform: ${transform};
  `;
});
const flexStyle = memoizeOne((flex: TypographyProps['flex']) => {
  return css`
    flex: ${flex};
  `;
});
const alignStyle = memoizeOne((align: TypographyProps['align']) => {
  return css`
    text-align: ${align};
  `;
});
const mainTitleStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.21;
    letter-spacing: -0.1px;
    color: ${colors.text};
  `;
});
const headline2Style = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${colors.text};
  `;
});
const headline3Style = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${colors.text};
  `;
});
const headline4Style = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.2px;
    color: ${colors.text};
  `;
});
const defaultStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.2px;
    color: ${colors.text};
  `;
});
const labelStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 12px;
    font-weight: 500;
    line-height: 2.08;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: ${colors.placeholder};
  `;
});
const placeholderStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    line-height: 1.33;
    color: ${colors.placeholder};
  `;
});
const tableItemStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
    color: ${colors.text};
  `;
});
const tableValueStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.33;
    color: ${colors.text};
  `;
});
const linkStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.2px;
    cursor: pointer;
    color: ${colors.primary};
    :hover {
      text-decoration: underline;
    }
  `;
});
const linkCancelStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.2px;
    cursor: pointer;
    color: ${colors.placeholder};
    :hover {
      text-decoration: underline;
    }
  `;
});
const captionStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.67;
    letter-spacing: -0.2px;
    color: ${colors.placeholder};
  `;
});
const breadcrumbStyle = memoizeOne(({ colors }: Theme) => {
  return css`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.placeholder};
  `;
});
