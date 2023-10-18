import { useRecoilState } from 'recoil';

import { User } from 'shared/api/auth';
import { tokenState, userState } from './atoms';
import { removeToken, removeUser, storeToken, storeUser } from '../lib';

export const useSession = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [user, setUser] = useRecoilState(userState);

  const sigInUser = async ({ token, user }: { token: string; user: User }) => {
    await storeToken(token);
    setToken(token);

    await storeUser(user);
    setUser(user);
  };

  const signOutUser = async () => {
    await removeToken();
    setToken(null);

    await removeUser();
    setUser(null);
  };

  return {
    isSignedIn: !!token,
    token,
    user,
    sigInUser,
    signOutUser,
  };
};
