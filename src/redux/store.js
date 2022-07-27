import { configureStore } from '@reduxjs/toolkit';
import { currentWeatherSlice } from './states/weather';
import { appSlice } from './states/app';

export default configureStore({
    reducer: {
      weather: currentWeatherSlice.reducer,
      app: appSlice.reducer
    }
  });
  