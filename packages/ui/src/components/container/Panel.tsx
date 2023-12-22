import clsx from 'clsx';
import React from 'react';

import { View } from '../../elements/View';

export type PanelProps = {
  injClass: string;
  level: 'p1' | 'p2' | 'p3';
};

const panelClass = {
  p1: 'bg-gray-200/60 dark:bg-gray-900/70',
  p2: 'bg-gray-100/80 dark:bg-gray-900/90',
  p3: 'bg-gray-50 dark:bg-gray-950/90',
};

export const Panel = ({ injClass = '', level = 'p2', ...props }: PanelProps) => {
  return <View tw={clsx(injClass, panelClass[level])} {...props} />;
};
