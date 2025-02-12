import { createSlice } from '@reduxjs/toolkit';
import { showItem, indexItems, indexGroups } from './showActions';

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
  item: null,
  items: null,
  successg: false,
  groups: null,
};

const showSlice = createSlice({
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
      state.item = payload.data;
      state.success = true;
    },
    [showItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
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
    [indexGroups.pending]: (state) => {
      state.loadingg = true;
      state.error = null;
    },
    [indexGroups.fulfilled]: (state, { payload }) => {
      state.loadingg = false;
      state.groups = payload.data;
      state.successg = true;
    },
    [indexGroups.rejected]: (state, { payload }) => {
      state.loadingg = false;
      state.error = payload;
    },
  },
});

export default showSlice.reducer;
