import Colors from '../../../resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBlock: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.inputColor,
    borderRadius: 5,
  },
});
