import { Image as ExpoImage } from 'expo-image';

// import { Image as ExpoImage } from 'react-native';
import { tw as tailwind } from '../tailwind';

function Image({ tw = '', ...props }) {
  return <ExpoImage style={{ ...(tailwind.style(tw) as any) }} {...props} />;
}

export { Image };
