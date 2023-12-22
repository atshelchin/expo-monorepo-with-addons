// https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import "react-native-get-random-values";

// https://github.com/acostalima/react-native-polyfill-globals
import "react-native-polyfill-globals/auto";

import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
