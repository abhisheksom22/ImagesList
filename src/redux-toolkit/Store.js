import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './slices/imagesListSlice';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
