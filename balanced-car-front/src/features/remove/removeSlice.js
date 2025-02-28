import { createSlice } from '@reduxjs/toolkit';
import { removeItem } from './removeActions';

// initialize userToken from local storage
const getUserToken = () => {
  const userToken = localStorage.getItem('userToken');
  return userToken ? JSON.parse(userToken) : null;
};

const initialState = {
  removeLoading: false,
  userInfo: null,
  userToken: getUserToken(),
  removeError: null,
  removeSuccess: false,
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
      state.removeLoading = true;
      state.removeError = null;
    },
    [removeItem.fulfilled]: (state) => {
      state.removeLoading = false;
      state.removeSuccess = true;
    },
    [removeItem.rejected]: (state, { payload }) => {
      state.removeLoading = false;
      state.rmooveError = payload;
    },
  },
});

export default removeSlice.reducer;
