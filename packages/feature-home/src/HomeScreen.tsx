import { Paragraph, Strong } from '@acme/ui';
import { ComponentProps } from 'react';
import { TextLink } from 'solito/link';
import { View } from 'react-native';

type HomeScreenProps = ComponentProps<typeof Paragraph>;

export const HomeScreen = (props: HomeScreenProps) => (
  <View style={{}}>
    <Paragraph {...props}>
      Hello from an <Strong>Expo monorepo</Strong>!
    </Paragraph>

    <TextLink href="/404"> Go to 404</TextLink>
  </View>
);
