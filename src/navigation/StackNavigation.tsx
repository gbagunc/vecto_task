/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  type ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import NetInfo, {
  type NetInfoState,
  type NetInfoSubscription,
} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../resources/routes.ts';
import TabNavigation from './TabNavigation';
import Category from '../screens/User/Category';
import {useAppDispatch} from '../store';
import {getAllProjects, updateWishList} from '../store/asyncThunks/products';
import ProductScreen from '../screens/User/ProductScreen';
import Search from '../screens/User/Search/Search.tsx';

const Stack = createNativeStackNavigator();

const StackNavigator = (): ReactElement => {
  const navigation = useNavigation();
  const [isConnected, setIsConnected] = useState<boolean | undefined>(
    undefined,
  );
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const unsubscribe: NetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState): void => {
        setIsConnected(
          typeof state.isConnected === 'boolean'
            ? state.isConnected
            : undefined,
        );
      },
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isConnected) {
      dispatch(updateWishList());
      AsyncStorage.getItem('token')
        .then((token: string | null): void => {
          if (token) {
            dispatch(getAllProjects());
          } else {
            navigation.reset({
              index: 0,
              routes: [{name: Routes.Login}],
            });
          }
        })
        .catch(() => {
          navigation.reset({index: 0, routes: [{name: Routes.Tabs}]});
        });
    }
  }, [isConnected, navigation]);

  return (
    <Stack.Navigator initialRouteName={Routes.Login}>
      <Stack.Group>
        <Stack.Screen
          name={Routes.Login}
          component={Login}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={Routes.Tabs}
          component={TabNavigation}
          options={{header: () => null}}
        />

        <Stack.Screen
          name={Routes.Search}
          component={Search}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={Routes.Category}
          component={Category}
          options={{header: () => null}}
        />
        <Stack.Screen
          name={Routes.Product}
          component={ProductScreen}
          options={{header: () => null}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
