import React, {ReactElement, useMemo} from 'react';
import Screen from '../../../core/Screen';
import NavigationHeader from '../../../core/NavigationHeader';
import Text from '../../../core/Text';
import Edges from '../../../resources/edges';
import {useRoute} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import styles from './styles.ts';
import Image from '../../../core/Image';
import {Product, ProductStore} from '../../../types';
import {View} from 'react-native';
import Icon from '../../../core/Icon';
import Button from '../../../core/Button';
import Colors from '../../../resources/colors.ts';
import {useDispatch, useSelector} from 'react-redux';
import {addWishList} from '../../../store/asyncThunks/products.ts';

const ProductScreen = (): ReactElement => {
  const route = useRoute();
  const dispatch = useDispatch();
  const product: Product | null = useMemo(
    () => route.params as Product,
    [route.params],
  );
  const productStore = useSelector(
    (state: {product: ProductStore}) => state.product,
  );

  const isFavorite: boolean = useMemo(() => {
    return productStore.wishList.includes(`${product.category}/${product.id}`);
  }, [product, productStore.wishList]);

  return (
    <Screen
      header={<NavigationHeader backHandler={true} title={<></>} />}
      contentContainerStyle={{...Edges.padding(12)}}>
      <View style={styles.root}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          overScrollMode={'always'}>
          {product?.images.map((img: string) => {
            return <Image key={img} uri={img} style={{borderRadius: 6}} />;
          })}
        </PagerView>
        <Button
          style={styles.wash_list_btn}
          onPress={() => {
            dispatch(addWishList(`${product.category}/${product.id}`));
          }}>
          <Icon
            fillColor={isFavorite ? Colors.red : undefined}
            strokeColor={isFavorite ? Colors.red : Colors.lightGray}
            name={'Heart'}
          />
        </Button>
      </View>
      <View style={styles.descriptionBlock}>
        <Text size={'20_600'}>{product?.title.toUpperCase()}</Text>
        <Text size={'20_600'}>{product?.price + '$'}</Text>
        <View style={{flexDirection: 'row', gap: 3}}>
          <Text size={'16_600'}>ID: </Text>
          <Text size={'16_300'}>{product?.id}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 3}}>
          <Text size={'16_600'}>Brand</Text>
          <Text size={'16_300'}>{product?.brand}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 3}}>
          <Text size={'16_600'}>Category</Text>
          <Text size={'16_300'}>{product?.category}</Text>
        </View>
        <View style={styles.border} />
        <Text>{product?.description}</Text>
      </View>
    </Screen>
  );
};

export default ProductScreen;
