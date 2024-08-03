import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authServices';
import editReducer from './features/edit/editSlice';
import { editApi } from './features/edit/editServices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    edit: editReducer,
    [editApi.reducerPath]: editApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,
    editApi.middleware),
});
export default store;
