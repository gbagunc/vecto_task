import {StyleSheet} from 'react-native';
import Edges from '../../resources/edges';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#E8E8E8',
    borderBottomColor: '#E8E8E8',
    paddingTop: -50,
    paddingBottom: -20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    ...Edges.margin(4, 0, 0, 0),
  },
});

export default styles;
