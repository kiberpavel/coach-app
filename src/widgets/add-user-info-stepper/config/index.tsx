import { Gender, Role } from 'shared/config/user';

export enum UserInfoKeys {
  gender = 'gender',
  role = 'role',
  height = 'height',
  weight = 'weight',
  username = 'username',
  avatar = 'avatar',
}

export type UserInfo = {
  gender: Gender;
  role: Role;
  height: string | undefined;
  weight: string | undefined;
  username: string;
  avatar: string;
};

export type StepComponentProps<K extends UserInfoKeys> = {
  initialValue: UserInfo[K];
  setValue: (value?: UserInfo[K]) => void;
};

export type StepComponent<K extends UserInfoKeys> = (props: StepComponentProps<K>) => JSX.Element;

export type Step<K extends UserInfoKeys = UserInfoKeys> = K extends K
  ? {
      key: K;
      component: StepComponent<K>;
    }
  : never;
