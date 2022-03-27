import styled from 'styled-components/native';
import {
  color,
  typography,
  space,
  compose,
  ColorProps,
  TypographyProps,
  SpaceProps,
} from 'styled-system';

export type TextProps = SpaceProps & TypographyProps & ColorProps;

const textProps = compose(space, color, typography);

const CommonText = styled.Text<TextProps>`
  color: ${({ theme }): string => theme.colors.text};
  ${textProps};
`;

export const H1 = styled(CommonText)`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`;
export const H2 = styled(CommonText)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`;
export const Text = styled(CommonText)`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;
export const SmallText = styled(CommonText)`
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
`;

export default {
  H1,
  H2,
  Text,
  SmallText,
};
