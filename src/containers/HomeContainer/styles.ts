import {StyleSheet, type TextStyle, type ViewStyle} from 'react-native';
import Edges from '../../resources/edges';

const styles = StyleSheet.create<{[key: string]: ViewStyle | TextStyle}>({
  root: {
    marginTop: -100,
    ...Edges.padding(12),
    flex: 1,
  },
  cards: {
    ...Edges.margin(10, 0),
  },
});

export default styles;
