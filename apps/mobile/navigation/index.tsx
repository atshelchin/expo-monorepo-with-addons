import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@acme/feature-home';
import { NotFoundScreen } from '@acme/feature-404';

const Stack = createNativeStackNavigator<{
  home: undefined;
  notfound: undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="notfound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
