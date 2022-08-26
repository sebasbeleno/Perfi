import {TextStyle, Platform} from 'react-native';
import {systemWeights} from 'react-native-typography';

type FontSize = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70';
export const fontSize: Record<FontSize, TextStyle> = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 14,
  },
  x30: {
    fontSize: 16,
  },
  x40: {
    fontSize: 19,
  },
  x50: {
    fontSize: 24,
  },
  x60: {
    fontSize: 32,
  },
  x70: {
    fontSize: 38,
  },
};

type FontWeight = 'regular' | 'semibold' | 'bold';
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
};

type LetterSpacing = 'x30' | 'x40';
export const letterSpacing: Record<LetterSpacing, number> = {
  x30: 2,
  x40: 3,
};

type LineHeight = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70';
export const lineHeight: Record<LineHeight, TextStyle> = {
  x10: {
    lineHeight: 20,
  },
  x20: {
    lineHeight: 22,
  },
  x30: {
    lineHeight: 24,
  },
  x40: {
    lineHeight: 26,
  },
  x50: {
    lineHeight: 32,
  },
  x60: {
    lineHeight: 38,
  },
  x70: {
    lineHeight: 44,
  },
};

type Bold = 'x10' | 'x20' | 'x30' | 'x40' | 'x50' | 'x60' | 'x70';
export const bold: Record<Bold, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    fontFamily: 'Lato-Bold',
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    fontFamily: 'Lato-Bold',
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    fontFamily: 'Lato-Bold',
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    fontFamily: 'Lato-Bold',
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    fontFamily: 'Lato-Bold',
  },
  x60: {
    ...fontSize.x60,
    ...lineHeight.x60,
    fontFamily: 'Lato-Bold',
  },
  x70: {
    ...fontSize.x70,
    ...lineHeight.x70,
    fontFamily: 'Lato-Bold',
  },
};

type Semibold = 'x10' | 'x20' | 'x30' | 'x40' | 'x50';
export const semibold: Record<Semibold, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    fontFamily: 'Lato-Regular',
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    fontFamily: 'Lato-Regular',
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    fontFamily: 'Lato-Regular',
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    fontFamily: 'Lato-Regular',
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    fontFamily: 'Lato-Regular',
  },
};

type Regular = 'x10' | 'x20' | 'x30' | 'x40' | 'x50';
export const regular: Record<Regular, TextStyle> = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    fontFamily: 'Lato-Regular',
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    fontFamily: 'Lato-Regular',
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    fontFamily: 'Lato-Regular',
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    fontFamily: 'Lato-Regular',
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    fontFamily: 'Lato-Regular',
  },
};

const monospaceFontFamily = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
});

type Monospace = 'base';
export const monospace: Record<Monospace, TextStyle> = {
  base: {
    fontFamily: monospaceFontFamily,
    letterSpacing: letterSpacing.x30,
  },
};
