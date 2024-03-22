import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import {userActions} from '../reducers';
import userApi from '../../api/user.ts';
import type {BodyType, User} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login: AsyncThunk<
  void,
  {body: BodyType; navigate: () => void},
  any
> = createAsyncThunk(
  'user/login',
  async (
    {body, navigate}: {body: BodyType; navigate: () => void},
    {dispatch},
  ) => {
    dispatch(userActions.setLoading(true));

    userApi
      .auth({username: 'kminchelle', password: '0lelplR'})
      .then((res: User) => {
        if (res.token) {
          AsyncStorage.setItem('token', res?.token)
            .then(() => {
              dispatch(userActions.setData(res));
              navigate();
            })
            .catch(() => {});
        }
      })
      .finally(() => {
        dispatch(userActions.setLoading(false));
      });
  },
);

export const logout: AsyncThunk<void, () => void, any> = createAsyncThunk(
  'user/logout',
  async (navigate: () => void, {dispatch}) => {
    dispatch(userActions.setLoading(true));

    AsyncStorage.clear()
      .then(() => {
        dispatch(userActions.clear());
        navigate();
      })
      .finally(() => {
        dispatch(userActions.setLoading(false));
      });
  },
);
