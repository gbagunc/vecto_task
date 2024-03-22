import {Dimensions, Image, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {imagesData} from '../../containers/CategoriesContainer/staticData';

import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const CarouselCardItem = ({item, index}: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} />
    </View>
  );
};

const CarouselBanner = () => {
  const carouselRef = useRef<any>(null);

  const [index, setIndex] = useState(0);

  const data = [
    {
      imgUrl: imagesData.FirstBanner,
    },
    {
      imgUrl: imagesData.SecondBanner,
    },
    {
      imgUrl: imagesData.ThirdBanner,
    },
  ];

  return (
    <View style={styles.carouselItem}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={carouselRef}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(slideIndex: number) => setIndex(slideIndex)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        carouselRef={carouselRef.current}
        activeDotIndex={index}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        inactiveDotStyle={styles.inactiveDot}
      />
    </View>
  );
};

export default CarouselBanner;
