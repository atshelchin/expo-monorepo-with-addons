import { Paragraph, View } from '@acme/ui';
import { ComponentProps } from 'react';
import { TextLink } from 'solito/link';

type HomeScreenProps = ComponentProps<typeof Paragraph>;

export const HomeScreen = (props: HomeScreenProps) => (
  <View tw="bg-red-200">
    <Paragraph {...props}>Hello from an Expo monorepo!</Paragraph>
    <TextLink href="/404"> Go to 404</TextLink>
  </View>
);
