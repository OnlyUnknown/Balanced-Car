import { createSlice } from '@reduxjs/toolkit';
import {
 indexItems,
} from './showActions';

const getUserToken = () => {
  const userToken = localStorage.getItem('userToken');
  return userToken ? JSON.parse(userToken) : null;
};

const initialState = {
  loading: false,
  loadingg: false,
  userInfo: null,
  userToken: getUserToken(),
  error: null,
  success: false,
  items: null,
  successg: false,
};

const showsSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // show index
    [indexItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [indexItems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload.data;
      state.success = true;
    },
    [indexItems.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default showsSlice.reducer;
