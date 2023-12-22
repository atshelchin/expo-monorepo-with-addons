import { Pressable as RNPressable } from 'react-native';
import { tw as tailwind } from '../tailwind';

function Pressable({ tw = '', ...props }) {
  return <RNPressable style={{ ...(tailwind.style(tw) as any) }} {...props} />;
}

export { Pressable };
