import {Pressable, Text, TextInput, View} from 'react-native';
import React from 'react';
import Screen from '../../../core/Screen';
import NavigationHeader from '../../../core/NavigationHeader';
import Icon from '../../../core/Icon';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  return (
    <Screen
      header={
        <NavigationHeader
          title={
            <View style={styles.headerBlock}>
              <Pressable onPress={() => navigation.goBack()}>
                <Icon name={'ChevronLeft'} size={30} />
              </Pressable>
              <TextInput placeholder="Search" style={styles.inputBlock} />
            </View>
          }
        />
      }>
      <Text>serach</Text>
    </Screen>
  );
};

export default Search;
