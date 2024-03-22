import {StyleSheet, type TextStyle, type ViewStyle} from 'react-native';

const styles = StyleSheet.create<{[key: string]: ViewStyle | TextStyle}>({
  card: {
    flex: 0.48,
    borderRadius: 6,
    overflow: 'hidden',
  },
  wash_list_btn: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  rateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCardBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
