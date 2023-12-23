import clsx from 'clsx';
import React from 'react';

import { Text } from '../../elements/Text';

export type ParagraphProps = {
  injClass?: string;
  level?: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
  themeText?: boolean;
  children:string;
};

// Font size color weight
const grayParagraphClass = {
  p1: `text-base sm:text-sm text-gray-900 dark:text-gray-300 font-bold`,
  p2: `text-base sm:text-sm text-gray-900 dark:text-gray-300 font-semibold`,
  p3: `text-base sm:text-sm text-gray-900 dark:text-gray-400`,
  p4: `text-sm sm:text-xs text-gray-800 dark:text-gray-400`,
  p5: `text-sm sm:text-xs text-gray-500 dark:text-gray-500`,
  p6: `text-sm sm:text-xs text-gray-400 dark:text-gray-600`,
};

const themeParagraphClass = {
  p1: `text-base sm:text-sm text-primary-900 dark:text-dark font-bold`,
  p2: `text-base sm:text-sm text-primary-900 dark:text-dark font-semibold `,
  p3: `text-base sm:text-sm text-primary-900 dark:text-dark-700`,
  p4: `text-sm sm:text-xs text-primary-800 dark:text-dark-700`,
  p5: `text-sm sm:text-xs text-primary-500 dark:text-dark-800`,
  p6: `text-sm sm:text-xs text-primary-400 dark:text-dark-900`,
};

export const Paragraph = ({
  injClass = '',
  level = 'p2',
  themeText = false,
  ...props
}: ParagraphProps) => {
  if (themeText) {
    return <Text tw={clsx(injClass, themeParagraphClass[level], 'flex')} {...props} />;
  } else {
    return <Text tw={clsx(injClass, grayParagraphClass[level], 'flex')} {...props} />;
  }
};
