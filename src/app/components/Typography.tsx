import styled from '@emotion/styled';
import { style } from 'styles';

const {
  constants: { font },
  theme: { page },
} = style;

export const LogoText = styled.span({
  color: page.fgTitle,
  fontFamily: font.family.title,
  fontSize: '1.75em',
  fontWeight: font.weight.title.regular,
});

export const TabText = styled.span({
  fontFamily: font.family.text,
  fontSize: '1em',
  fontWeight: font.weight.text.bold,
});
