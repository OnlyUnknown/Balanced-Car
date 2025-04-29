import { createSlice } from '@reduxjs/toolkit';
import { indexItems } from './showActions';

const getUserToken = () => {
  const userToken = localStorage.getItem('userToken');
  return userToken ? JSON.parse(userToken) : null;
};

const initialState = {
  loading: false,
  userInfo: null,
  userToken: getUserToken(),
  error: null,
  success: false,
  drivers: null,
};

const showDSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // show item
    [indexItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [indexItems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.drivers = payload.data;
      state.success = true;
    },
    [indexItems.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  },
});

export default showDSlice.reducer;
