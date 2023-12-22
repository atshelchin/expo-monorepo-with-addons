import { ComponentProps } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import { tw as tailwind } from '../tailwind';

function ScrollView({ tw = '', ...props }) {
  return <RNScrollView style={{ ...(tailwind.style(tw) as any) }} {...props} />;
}

export { ScrollView };
