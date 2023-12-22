import { Text as RNText } from 'react-native';
import { tw as tailwind } from '../tailwind';

function Text({ tw = '', ...props }) {
  return <RNText style={{ ...tailwind.style('text-center'), ...tailwind.style(tw) }} {...props} />;
}

export { Text };
