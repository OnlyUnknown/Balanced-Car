import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './editActions';

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
  name:null,
  phone_number:null
};

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
    state.userInfo = payload;
  },},
  extraReducers: {
    // edit profile
    [editUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.name = payload.name;
      state.phone_number = payload.phone_number;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
   
  },
});

export default editSlice.reducer;
