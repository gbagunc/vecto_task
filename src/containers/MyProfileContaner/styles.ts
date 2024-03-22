import Colors from '../../resources/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  userInfoBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighty,
  },
  userInfoName: {
    justifyContent: 'flex-start',
    marginRight: 30,
  },
  userImg: {
    width: 70,
    height: 70,
    borderRadius: 90,
  },
  bottomBlock: {
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomColor: Colors.lighty,
    borderTopColor: Colors.lighty,
  },
});
