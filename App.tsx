import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import Root from './src/Root';

export default function App() {
  const [loaded] = useFonts({
    'Mukta-Bold': require('./assets/fonts/Mukta/Mukta-Bold.ttf'),
    'Mukta-ExtraBold': require('./assets/fonts/Mukta/Mukta-ExtraBold.ttf'),
    'Mukta-ExtraLight': require('./assets/fonts/Mukta/Mukta-ExtraLight.ttf'),
    'Mukta-Light': require('./assets/fonts/Mukta/Mukta-Light.ttf'),
    'Mukta-Medium': require('./assets/fonts/Mukta/Mukta-Medium.ttf'),
    'Mukta-Regular': require('./assets/fonts/Mukta/Mukta-Regular.ttf'),
    'Mukta-SemiBold': require('./assets/fonts/Mukta/Mukta-SemiBold.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return <Root />;
}
