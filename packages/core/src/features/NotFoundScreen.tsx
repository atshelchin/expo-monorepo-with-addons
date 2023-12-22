import { Paragraph, Heading, View } from '@acme/ui';
import { ComponentProps } from 'react';

type NotFoundScreenProps = ComponentProps<typeof Paragraph>;

export const NotFoundScreen = (props: NotFoundScreenProps) => (
  <View style={{ height: '100vh', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View {...props} tw="bg-primary-100">
      <Heading>404</Heading>
      <Paragraph>This page could not be found.</Paragraph>
    </View>
  </View>
);
