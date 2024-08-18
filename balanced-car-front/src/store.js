import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authServices';
import editReducer from './features/edit/editSlice';
import { editApi } from './features/edit/editServices';
import addReducer from './features/add/addSlice';
import { addApi } from './features/add/addServices';
import showReducer from './features/show/showSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    edit: editReducer,
    [editApi.reducerPath]: editApi.reducer,
    add: addReducer,
    [addApi.reducerPath]: addApi.reducer,
    show: showReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,
    editApi.middleware, addApi.middleware),
});
export default store;
