import clsx from 'clsx';
import React from 'react';

import { Text } from '../../elements/Text';

export type HeadingProps = {
  injClass?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children:string
};

// Font size color weight
const headingClass = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl dark:text-gray-50 font-extrabold',
  h2: 'text-3xl sm:text-4xl lg:text-5xl dark:text-gray-100 font-extrabold',
  h3: 'text-2xl sm:text-3xl lg:text-4xl dark:text-gray-100 font-bold',
  h4: 'text-xl sm:text-2xl lg:text-3xl dark:text-gray-200 font-bold',
  h5: 'text-lg sm:text-xl lg:text-2xl dark:text-gray-200 font-semibold',
  h6: 'text-base sm:text-lg lg:text-xl dark:text-gray-300 font-semibold',
};

export const Heading = ({ injClass = '', level = 'h4', ...props }: HeadingProps) => {
  return <Text tw={clsx(injClass, headingClass[level])} {...props} />;
};
