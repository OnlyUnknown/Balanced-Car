import { createSlice } from '@reduxjs/toolkit';
import { editUser, editItem } from './editActions';

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
  name: null,
  phone_number: null,
  item: null,
};

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // edit profile
    [editUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.name = payload.data.item.name;
      state.phone_number = payload.data.item.phone_number;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // edit Item
    [editItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.item = payload.item;
    },
    [editItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

  },
});

export default editSlice.reducer;
