import Color from 'color';

/**
 * Convert a hex color to an rgba with alpha
 */
export const rgba = (hexColor: string, alpha: number) =>
  Color(hexColor)
    .alpha(alpha)
    .rgb()
    .string();

/**
 * Colors (not to be used directly)
 */
const colors = {
  white: '#FFFFFF',
  grayLightest: '#FAFAFA',
  grayLighter: '#E3E3E3',
  gray: '#B7B7B7',
  grayDark: '#A2A2A2',
  grayDarker: '#606060',
  black: '#000000',
  purple: '#7526D1',
};

/**
 * Theme
 */
export const theme = {
  page: {
    bg: colors.white,
    fg: colors.grayDarker,
    fgTitle: colors.purple,
    divider: colors.grayLighter,
  },
  sidebar: {
    bg: colors.grayLightest,
    fg: colors.grayDarker,
    fgActive: colors.purple,
    border: colors.grayLighter,
  },
  link: {
    fg: colors.purple,
  },
  card: {
    bg: colors.white,
    bgPlacemat: colors.grayLightest,
    fg: colors.grayDarker,
    fgTitle: colors.black,
    fgSubtitle: colors.grayDark,
    border: colors.gray,
    borderLiked: colors.purple,
    fgPlaceholder: colors.grayDark,
  },
  button: {
    bg: colors.purple,
    fg: colors.white,
  },
};
