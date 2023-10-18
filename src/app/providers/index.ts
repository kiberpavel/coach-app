import compose from 'compose-function';

import { withSafeArea } from './with-safe-area';
import { withRecoil } from './with-recoil';
import { withApollo } from './with-apollo';
import { withActionSheet } from './with-action-sheet';

export const withProviders = compose(withSafeArea, withRecoil, withApollo, withActionSheet);
