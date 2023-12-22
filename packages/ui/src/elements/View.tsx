import { View as RNView } from 'react-native';
import { tw as tailwind } from '../tailwind';

function View({ tw = '', ...props }) {
  return <RNView style={{ ...(tailwind.style(tw) as any) }} {...props} />;
}

export { View };