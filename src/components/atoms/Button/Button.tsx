import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../Typography';

interface ButtonCustomProps {
  wide?: boolean;
}

const StButton = styled.TouchableOpacity<Pick<ButtonCustomProps, 'wide'>>`
  padding: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
`;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  wide?: boolean;
  bold?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, wide, bold, ...restProps } = props;
  return (
    <StButton {...restProps} wide={wide}>
      <Text fontWeight={bold ? 'bold' : 'normal'} color="background">
        {title}
      </Text>
    </StButton>
  );
};
