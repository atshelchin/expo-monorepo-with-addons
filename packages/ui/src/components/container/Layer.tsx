import clsx from 'clsx';
import React from 'react';

import { View } from '../../elements/View';

export type LayerProps = {
  injClass?: string;
  level?: 'l1' | 'l2';
} & { children?: JSX.Element };

const layerClass = {
  l1: 'bg-primary-50/30 dark:bg-darkBlack w-screen h-screen  overflow-hidden',
  l2: 'bg-white dark:bg-gray-700',
};

export const Layer = ({ injClass = '', level = 'l2', ...props }: LayerProps) => {
  return <View tw={clsx(injClass, layerClass[level])} {...props} />;
};
