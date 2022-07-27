import { createSlice } from '@reduxjs/toolkit';

export const CurrentWeatherEmptyState = {
    city: '',
    country: '',
    state: '',
    lat: '',
    lon: '',
    temp: '',
    description: '',
    feelsLike: '',
    min: '',
    max: '',
    humidity: '',
    wind: '',
    icon: '',
    daily: {
      
    }
  };
  
  export const currentWeatherSlice = createSlice({
    name: 'weather',
    initialState: CurrentWeatherEmptyState,
    reducers: {
      createWeather: (state, action) => action.payload,
      modifyWeather: (state, action) => ({ ...state, ...action.payload})
    }
  });

  export const { createWeather, modifyWeather } = currentWeatherSlice.actions;

  export default currentWeatherSlice.reducer;
  