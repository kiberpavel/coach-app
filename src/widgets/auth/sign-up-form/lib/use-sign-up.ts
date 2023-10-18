import { useSession } from 'entities/session';
import { useSignUpMutation } from 'shared/api/auth';

export const useSignUp = () => {
  const { sigInUser } = useSession();

  const [signUp, { error, loading }] = useSignUpMutation();

  const handleSignUp = async (fullName: string, email: string, password: string) => {
    const { data } = await signUp({ variables: { fullName, email, password } });

    if (data?.signUp) {
      const {
        signUp: { accessToken, user },
      } = data;

      await sigInUser({ token: accessToken, user });
    }
  };

  return {
    loading,
    error,
    signUp: handleSignUp,
  };
};
