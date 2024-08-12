import { createSlice } from '@reduxjs/toolkit';
import { addItem } from './addActions';

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

const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // add profile
    [addItem.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addItem.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.name = payload.data.item.name;
      state.phone_number = payload.data.item.phone_number;
    },
    [addItem.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

  },
});

export default addSlice.reducer;
