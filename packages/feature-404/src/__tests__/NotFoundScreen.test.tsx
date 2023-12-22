import { cleanup, render, screen } from '@testing-library/react-native';

import { NotFoundScreen } from '../NotFoundScreen';

afterEach(cleanup);

it('says Expo monorepo', () => {
  render(<NotFoundScreen />);
  expect(screen.getByText('Expo monorepo')).toBeDefined();
});
