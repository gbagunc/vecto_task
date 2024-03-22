import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    position: 'relative',
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    zIndex: -1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  back_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
