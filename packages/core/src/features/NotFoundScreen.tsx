import { View } from 'react-native';
import { Paragraph, Strong } from '@acme/ui';
import { ComponentProps } from 'react';

type NotFoundScreenProps = ComponentProps<typeof Paragraph>;

export const NotFoundScreen = (props: NotFoundScreenProps) => (
  <View style={{ height: '100vh', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Paragraph {...props}>
      <Strong>404</Strong> | This page could not be found.
    </Paragraph>
  </View>
);
