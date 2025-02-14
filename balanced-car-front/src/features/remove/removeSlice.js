import { createSlice } from '@reduxjs/toolkit';
import { removeItem } from './removeActions';

// initialize userToken from local storage
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
};

const removeSlice = createSlice({
  name: 'remove',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // add profile
    [removeItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [removeItem.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [removeItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default removeSlice.reducer;
