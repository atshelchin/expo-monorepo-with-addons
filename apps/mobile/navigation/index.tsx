import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, NotFoundScreen } from '@acme/core';

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
