import React, {ReactNode} from 'react';
import {TextInput, View} from 'react-native';
import {RootComponentProps} from './types';
import styles from './styles.ts';
import Colors from '../../resources/colors';

const RootComponent = React.forwardRef<ReactNode, RootComponentProps>(
  (
    {
      value,
      isValid,
      visibility,
      validationKey,
      containerStyles,
      inputStyles,
      buttons,
      frontIcon,
      onChangeText,
      ...props
    },
    ref,
  ) => {
    return (
      <View
        style={[
          styles.container,
          {
            borderColor:
              validationKey && value
                ? isValid
                  ? Colors.lightGray
                  : Colors.red
                : Colors.lightGray,
          },
          containerStyles,
        ]}>
        {frontIcon}
        <View style={styles.inputView}>
          <TextInput
            onChangeText={onChangeText}
            ref={ref}
            value={value}
            secureTextEntry={visibility}
            style={[
              styles.input,
              inputStyles,
              {
                color: isValid ? Colors.lightGray : Colors.red,
              },
            ]}
            placeholderTextColor={
              props.placeholderTextColor || Colors.lightGray
            }
            selectTextOnFocus={true}
            {...props}
          />
        </View>
        {buttons}
      </View>
    );
  },
);

export default RootComponent;
