import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

// initialize userToken from local storage
const getUserToken = () => {
  const userToken = localStorage.getItem('userToken');
  return userToken ? JSON.parse(userToken) : null;
};

const initialState = {
  signedin: false,
  loading: false,
  userInfo: null,
  userToken: getUserToken(),
  error: null,
  name: null,
  phone_number: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken'); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.signedin = false;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.signedin = true;
      state.userInfo = payload.resource_owner;
      state.userToken = payload.token;
      state.name = payload.resource_owner.name;
      state.phone_number = payload.resource_owner.phone_number;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
