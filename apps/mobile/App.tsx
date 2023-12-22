import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from './provider';
import { NativeNavigation } from './navigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Provider>
        <NativeNavigation />
      </Provider>
    </SafeAreaView>
  );
}
