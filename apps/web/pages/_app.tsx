import '../styles/globals.css';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
function MyApp({ Component, pageProps }) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Component {...pageProps} />
    </ApplicationProvider>
  );
}

export default MyApp;
