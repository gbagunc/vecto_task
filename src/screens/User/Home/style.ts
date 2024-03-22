import {StyleSheet, type TextStyle, type ViewStyle} from 'react-native';

const styles = StyleSheet.create<{[key: string]: ViewStyle | TextStyle}>({
  search: {
    width: '100%',
    justifyContent: 'space-between',
  },
  headerBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default styles;
