import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import {productActions} from '../reducers';
import productApi from '../../api/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllProjects: AsyncThunk<void, void, any> = createAsyncThunk(
  'products',
  async (_, {dispatch}) => {
    dispatch(productActions.setLoading(true));

    productApi
      .getCategories()
      .then(res => {
        Promise.all(
          res.map(c => productApi.getProductsByCategory(c, '?limit=4')),
        )
          .then(products => {
            res.map((category, index) => ({
              [category]: products[index].products,
            }));
            dispatch(
              productActions.setHomeProduct(
                res.map((category: string, index: number) => ({
                  name: category,
                  products: products[index].products,
                })),
              ),
            );
          })
          .catch(() => {});
      })
      .finally(() => {
        dispatch(productActions.setLoading(false));
      });
  },
);

export const addWishList: AsyncThunk<void, string, any> = createAsyncThunk(
  'wishlist',
  async (ID: string, {dispatch}) => {
    AsyncStorage.getItem('wishlist')
      .then((res: string | null): void => {
        let wishlistClone: string[] = [];
        if (res) {
          wishlistClone = [...JSON.parse(res)];

          if (wishlistClone.includes(ID)) {
            wishlistClone = wishlistClone.filter(
              (wishlistId: string) => wishlistId !== ID,
            );
          } else {
            wishlistClone.push(ID);
          }
        }
        AsyncStorage.setItem('wishlist', JSON.stringify(wishlistClone))
          .then(() => {
            dispatch(productActions.setWishList(wishlistClone));
          })
          .catch(() => {});
      })
      .finally(() => {});
  },
);

export const updateWishList: AsyncThunk<void, void, any> = createAsyncThunk(
  'wishlist',
  async (_, {dispatch}) => {
    AsyncStorage.getItem('wishlist')
      .then((res: string | null): void => {
        if (res) {
          AsyncStorage.setItem('wishlist', res)
            .then(() => {
              dispatch(productActions.setWishList(JSON.parse(res)));
            })
            .catch(e => {
              console.log('e', e);
            });
        }
      })
      .finally(() => {});
  },
);

export const getProductList: AsyncThunk<void, number, any> = createAsyncThunk(
  'wishlist',
  async (offset: number, {dispatch}) => {
    dispatch(productActions.setLoadingWishList(true));
    productApi
      .getALLProducts(offset)
      .then(res => {
        dispatch(productActions.setAllProductsProducts(res.products));
        dispatch(productActions.setCountInDB(res.total));
      })
      .finally(() => {
        dispatch(productActions.setLoadingWishList(false));
      });
  },
);
