import React from 'react';
import {ReactElement} from 'react';
import HomeContainer from '../../../containers/HomeContainer';
import Screen from '../../../core/Screen';
import NavigationHeader from '../../../core/NavigationHeader';
import {Pressable, View} from 'react-native';
import Icon from '../../../core/Icon';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import CarouselBanner from '../../../components/Carousel/Carousel';

const Home = (): ReactElement => {
  const navigation = useNavigation();
  return (
    <Screen
      scrollDisable={true}
      header={
        <NavigationHeader
          title={
            <View style={styles.headerBlock}>
              <Icon name={'Logo'} size={32} />
              <Pressable onPress={() => navigation.navigate('Search')}>
                <Icon name={'Search'} />
              </Pressable>
            </View>
          }
        />
      }>
      <CarouselBanner />
      <HomeContainer />
    </Screen>
  );
};

export default Home;
