import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from './provider';
import { NativeNavigation } from './navigation';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Provider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NativeNavigation />
        </ApplicationProvider>
      </Provider>
    </SafeAreaView>
  );
}
