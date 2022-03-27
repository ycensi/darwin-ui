import React from 'react';
import { Icon as REIcon } from 'react-native-elements';

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  type?: string;
};

export const Icon = ({
  size = 40,
  color = '#000',
  type = 'font-awesome',
  name,
}: IconProps): JSX.Element => {
  return (
    <REIcon
      size={size}
      color={color}
      name={name}
      type={type}
      tvParallaxProperties={undefined}
    />
  );
};
