import {Colors, Edges} from '../../resources/index';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    ...Edges.padding(12),
  },
  form: {
    rowGap: 16,
  },
  requiredBlock: {
    flexDirection: 'row',
  },
  required: {
    color: Colors.red,
  },
});

export default styles;
