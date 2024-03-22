/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useState, useRef} from 'react';
import {Image, View} from 'react-native';
import Input from '../../core/Input';
import Screen from '../../core/Screen';
import styles from './styles';
import {BodyType, ChangeEventType, RequiredMessageType} from 'types';
import {
  onChangeBody,
  onRequiredFieldNotAvailable,
} from '../../resources/utils.ts';
import {formQuery} from './enums.ts';
import Button from '../../core/Button';
import {useAppDispatch} from '../../store';
import {login} from '../../store/asyncThunks/user.ts';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../resources/routes.ts';
import NavigationHeader from '../../core/NavigationHeader';
import Text from '../../core/Text';

const Login = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const secondInput = useRef<any>(null);

  const [body, setBody] = useState<BodyType>({});

  const [requiredMessage, setRequiredMessage] = useState<RequiredMessageType>(
    {},
  );

  const onFinish = (e: ChangeEventType): void => {
    const copyBody = {...requiredMessage};
    if (e.name) {
      delete copyBody[e.name];
    }
    setRequiredMessage(copyBody);
    if (body) {
      onChangeBody(e, body, setBody);
    }
  };

  const onDisable = () => {
    const result: {[key: string]: string} = {};
    if (body) {
      onRequiredFieldNotAvailable(
        Object.values(formQuery),
        body,
        (item: string) => {
          result[item] = `${item[0].toUpperCase() + item.slice(1)} is required`;
        },
      );
    }

    setRequiredMessage(result);
  };

  const onSubmit = () => {
    dispatch(
      login({
        body,
        navigate: () => {
          navigation.reset({
            index: 0,
            routes: [{name: Routes.Tabs}],
          });
        },
      }),
    );
  };
  return (
    <Screen
      contentContainerStyle={styles.root}
      header={<NavigationHeader title={<></>} />}>
      <Text
        size={'24_600'}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 30,
        }}>
        LOG IN
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          style={{
            flex: 1,
            width: 150,
            height: 150,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/logo_main.png')}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.requiredBlock}>
          <Text size={'16_300'}>Username</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <Input
          name={formQuery.username}
          onFinish={onFinish}
          requiredMessage={requiredMessage[formQuery.username]}
          value={body[formQuery.username]}
          onSubmitEditing={() => {
            secondInput.current.focus();
          }}
          enterKeyHint={'next'}
        />
        <View style={styles.requiredBlock}>
          <Text size={'16_300'}>Password</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <Input
          name={formQuery.password}
          secureTextEntry={true}
          validationKey={'password'}
          onFinish={onFinish}
          requiredMessage={requiredMessage[formQuery.password]}
          value={body[formQuery.password]}
          ref={secondInput}
          onSubmitEditing={onSubmit}
        />
        <Button
          label={'LOG IN'}
          variant={'primary'}
          onDisable={onDisable}
          onPress={onSubmit}
          style={{marginTop: 70}}
        />
      </View>
    </Screen>
  );
};

export default Login;
