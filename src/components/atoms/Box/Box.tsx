import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  space,
  layout,
  position,
  color,
  compose,
  FlexBasisProps,
  LayoutProps,
  MarginProps,
  PaddingProps,
  ShadowProps,
  SpaceProps,
  FlexProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    FlexBasisProps,
    FlexProps,
    ShadowProps,
    MarginProps,
    PaddingProps,
    ViewProps,
    SpaceProps {
  testID?: 'string';
  children?: ReactNode;
}

const boxProps = compose(space, color, layout, flexbox, position);

export const Box = styled.View<BoxProps>`
  ${boxProps};
`;
