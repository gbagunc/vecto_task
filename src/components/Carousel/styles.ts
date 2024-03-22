import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 40,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    marginTop: -70,
    borderRadius: 20,
    flex: 1,
  },
  image: {
    height: 230,
    borderRadius: 20,
    width: '92%',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#000',
    top: -100,
  },
  inactiveDot: {
    backgroundColor: '#fff',
  },
});

export default styles;
