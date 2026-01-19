import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authServices';
import editReducer from './features/edit/editSlice';
import { editApi } from './features/edit/editServices';
import addReducer from './features/add/addSlice';
import { addApi } from './features/add/addServices';
import showReducer from './features/show/showSlice';
import showDReducer from './features/show/showDSlice';
import { removeApi } from './features/remove/removeServices';
import removeReducer from './features/remove/removeSlice';
import showsReducer from './features/show/showsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    edit: editReducer,
    [editApi.reducerPath]: editApi.reducer,
    add: addReducer,
    [addApi.reducerPath]: addApi.reducer,
    show: showReducer,
    showD: showDReducer,
    shows: showsReducer,
    [removeApi.reducerPath]: removeApi.reducer,
    remove: removeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware,
    editApi.middleware, addApi.middleware, removeApi.middleware),
});
export default store;
