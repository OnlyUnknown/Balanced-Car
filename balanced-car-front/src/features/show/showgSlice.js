import { createSlice } from '@reduxjs/toolkit';
import {
 indexGroups, indexGroupItems,
} from './showActions';

const getUserToken = () => {
  const userToken = localStorage.getItem('userToken');
  return userToken ? JSON.parse(userToken) : null;
};

const initialState = {
  loadingg: false,
  userInfo: null,
  userToken: getUserToken(),
  error: null,
  successg: false,
  groups: null,
  groupItems: null,
};

const showgSlice = createSlice({
  name: 'showg',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    [indexGroups.pending]: (state) => {
      state.loadingg = true;
      state.error = null;
    },
    [indexGroups.fulfilled]: (state, { payload }) => {
      state.loadingg = false;
      state.groups = payload.data;
      state.successg = true;
    },
    [indexGroupItems.rejected]: (state, { payload }) => {
      state.loadingg = false;
      state.error = payload;
    },
    [indexGroupItems.pending]: (state) => {
      state.loadingg = true;
      state.error = null;
    },
    [indexGroupItems.fulfilled]: (state, { payload }) => {
      state.loadingg = false;
      state.groupItems = payload.data;
      state.successg = true;
    },
    [indexGroupItems.rejected]: (state, { payload }) => {
      state.loadingg = false;
      state.error = payload;
    },
  },
});

export default showgSlice.reducer;
