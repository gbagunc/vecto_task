import React, {ReactElement} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Pressable, View} from 'react-native';
import Image from '../../core/Image';
import Routes from '../../resources/routes.ts';
import {useDispatch, useSelector} from 'react-redux';
import {UserStore} from '@types';
import {logout} from '../../store/asyncThunks/user.ts';
import {styles} from './styles.ts';
import Text from '../../core/Text';
import Colors from '../../resources/colors.ts';
import Icon from '../../core/Icon';

const MyProfileContainer = (): ReactElement => {
  const navigation = useNavigation();
  const userStore = useSelector((state: {user: UserStore}) => state.user);
  const dispatch = useDispatch();

  if (userStore.isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{flex: 1}}>
      {userStore.data && (
        <View style={styles.userInfoBlock}>
          {userStore.data?.image && (
            <View>
              <Image uri={userStore.data?.image} style={styles.userImg} />
            </View>
          )}
          <View style={styles.userInfoName}>
            <Text size={'16_400'}>
              {userStore.data?.firstName + ' ' + userStore.data?.lastName}
            </Text>
            <Text size={'16_300'} style={{color: Colors.darkGray}}>
              {userStore.data.gender}
            </Text>
          </View>
        </View>
      )}

      <View style={{flex: 1}} />
      <Pressable
        style={styles.bottomBlock}
        onPress={() => {
          if (userStore.data) {
            dispatch(
              logout(() => {
                navigation.reset({index: 0, routes: [{name: Routes.Login}]});
              }),
            );
          } else {
            navigation.navigate(Routes.Login);
          }
        }}>
        <Icon name={'OutLogo'} size={26} />
        <Text size={'16_300'}>Log Out</Text>
        <View style={{position: 'absolute', right: 5}}>
          <Icon name={'ChevronRight'} size={23} />
        </View>
      </Pressable>
    </View>
  );
};

export default MyProfileContainer;
