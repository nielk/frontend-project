import { css } from 'emotion';

const DefaultTheme = {
  colors: {
    white: '#ffffff',
    input: '#f1f2f8',
    text: '#2a225b',
    primary: '#5856d6',
    disabled: '#ced1e2',
    placeholder: '#9fa6c7',
    icon: '#b4bfd1',
    success: '#24bdb9',
    alert: '#fd5573',
    warning: '#fd9727',
    indigo: '#5a4fc3',
    melrose: '#908eff',
    focused: '#9ee1ff',
    transparent: '#ffffff',
    disabledText: '#a6accb',
    pale: '#f7f7ff'
  },
  styles: {
    bgGradients: {
      primary: css`
        background: #3a44e9;
        background: linear-gradient(122deg, #3a44e9, #7038e3);
      `,
      primaryHover: css`
        background: #323bcf;
        background: linear-gradient(96deg, #323bcf, #6431cc);
      `,
      success: css`
        background: #23bcba;
        background: linear-gradient(135deg, #23bcba, #45e994);
      `,
      successHover: css`
        background: #1fa9a7;
        background: linear-gradient(99deg, #1fa9a7, #3ed587);
      `,
      alert: css`
        background: #ff418b;
        background: linear-gradient(to right, #ff418b, #ff3466);
      `,
      alertHover: css`
        background: #e13779;
        background: linear-gradient(to right, #e13779, #e02a56);
      `,
      warning: css`
        background: #ffdea7;
        background: linear-gradient(315deg, #ffdea7, #ea6362);
      `,
      classicRose: css`
        background: #fbc2eb;
        background: linear-gradient(315deg, #fbc2eb, #a18cd1);
      `,
      froly: css`
        background: #f68084;
        background: linear-gradient(315deg, #f68084, #a6c0fe);
      `,
      brightSun: css`
        background: #fee140;
        background: linear-gradient(315deg, #fee140, #fa709a);
      `,
      malibu: css`
        background: #8ec5fc;
        background: linear-gradient(315deg, #8ec5fc, #e0c3fc);
      `,
      aeroBlue: css`
        background: #a7ffd8;
        background: linear-gradient(315deg, #a7ffd8, #a1c4fd);
      `,
      placeholder: css`
        background: #b1aff0;
        background: linear-gradient(315deg, #b1aff0, #836df0);
      `,
      melrose: css`
        background: #9890e3;
        background: linear-gradient(315deg, #9890e3, #b1f4cf);
      `,
      focused: css`
        background: #b8edff;
        background: linear-gradient(315deg, #b8edff, #92baf0);
      `,
      bermuda: css`
        background: #71dda6;
        background: linear-gradient(315deg, #71dda6, #70b2bc);
      `,
      royalBlue: css`
        background: #2946eb;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)),
          linear-gradient(121deg, #2946eb, #8129e6);
      `,
      transparent: css`
        background: transparent;
      `
    }
  },
  avatarColors: {
    sandwisp: '#f4efa4',
    blizzardBlue: '#a3efed',
    lavender: '#b689d9',
    sulu: '#baee96',
    grannySmithApple: '#83dd97',
    macaroniAndCheeze: '#ffb480',
    seaPink: '#e999a3',
    blueBell: '#9797c8',
    sunglo: '#e06d7c',
    vividTangerine: '#ff8080',
    viking: '#70cadc',
    dullLavender: '#94a8e6',
    mustard: '#ffe35d'
  },
  paddings: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 24,
    xl: 32,
    xxl: 64
  },
  shadows: {
    sm: 'box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.1)',
    md: 'box-shadow: 8px 8px 8px 0px rgba(0,0,0,0.25)',
    lg: 'box-shadow: 16px 16px 16px 0px rgba(0,0,0,0.3)',
    xl: 'box-shadow: 32px 32px 32px 0px rgba(0,0,0,0.5)'
  },
  sizes: {
    xs: 12,
    sm: 24,
    md: 32,
    lg: 44,
    xl: 64,
    xxl: 90
  },
  zIndexes: {
    select: 1
  },
  bps: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  breakpoints: {
    up: (bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      return `@media (min-width: ${DefaultTheme.bps[bp]}px)`;
    },
    down: (bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      return `@media (max-width: ${DefaultTheme.bps[bp]}px)`;
    }
  },
  font: {
    primary: `'Montserrat', Arial, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif,`
  }
};

/**
 * Type definition of Theme
 */
export type Theme = typeof DefaultTheme;

/**
 * Applications default Theme
 */
export default DefaultTheme;
