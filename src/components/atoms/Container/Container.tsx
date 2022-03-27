import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface ConteinerProps extends ViewProps {
  children?: JSX.Element | JSX.Element[];
}

export const Container: React.FC<ConteinerProps> = (props: ConteinerProps) => {
  const { children, ...restProps } = props;
  return <View {...restProps}>{children}</View>;
};
