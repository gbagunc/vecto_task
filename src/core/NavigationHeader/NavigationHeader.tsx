import React, {ReactElement} from 'react';
import {Pressable, View} from 'react-native';
import Text from '../../core/Text';
import {NavigationHeaderProps} from './types';
import styles from './style.ts';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../Button';
import Icon from '../Icon';
import {SafeAreaView} from 'react-native-safe-area-context';

const NavigationHeader = ({
  backHandler = false,
  buttons = null,
  style = {},
  title,
}: NavigationHeaderProps): ReactElement => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {backHandler && (
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            style={{position: 'absolute'}}>
            <Icon name={'ChevronLeft'} size={30} />
          </Button>
        )}
      </View>

      <View style={styles.title_container}>
        {title || (
          <Text style={styles.title} size={'20_600'} numberOfLines={1}>
            {route.name}
          </Text>
        )}
      </View>

      <View style={styles.buttons}>{buttons}</View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
