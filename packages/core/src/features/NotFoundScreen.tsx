import { Paragraph, Heading, View } from '@acme/ui';
import { ComponentProps } from 'react';

export const NotFoundScreen = () => (
  <View style={{ height: '100vh', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View tw="bg-primary-100">
      <Heading>404</Heading>
      <Paragraph>This page could not be found.</Paragraph>
    </View>
  </View>
);
