import Colors from '../../../resources/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
  pagerView: {
    flex: 1,
    borderRadius: 6,
  },
  wash_list_btn: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  descriptionBlock: {
    flex: 1,
    gap: 10,
  },
  border: {
    width: '120%',
    right: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.lighty,
  },
});

export default styles;
