import { createSlice } from '@reduxjs/toolkit';
import { showItem } from './showActions';

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
  bills: null,
};

const showBSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // show item
    [showItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [showItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bills = payload.data;
      state.success = true;
    },
    [showItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default showBSlice.reducer;
