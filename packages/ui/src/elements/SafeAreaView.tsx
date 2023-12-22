import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { tw as tailwind } from '../tailwind';

function SafeAreaView({ tw = '', ...props }) {
  return <RNSafeAreaView style={{ ...(tailwind.style(tw) as any) }} {...props} />;
}

export { SafeAreaView };
