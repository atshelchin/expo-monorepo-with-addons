import clsx from 'clsx';
import React from 'react';

import { View } from '../../elements/View';

export type BoxProps = {
  injClass: string;
  level: 'b1' | 'b2' | 'b3';
};
const boxClass = {
  b1: 'bg-gray-100/80 dark:bg-gray-950/70',
  b2: 'bg-white/40 dark:bg-gray-900/80',
  b3: 'bg-white dark:bg-gray-800',
};

export const Box = ({ injClass = '', level = 'b2', ...props }: BoxProps) => {
  return <View tw={clsx(injClass, boxClass[level])} {...props} />;
};
