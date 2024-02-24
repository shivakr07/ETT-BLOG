import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  userReducer  from './user/userSlice.js'
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key : 'root',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

//instead of having a lot of reducers we could have only one reducer
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// })

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({ serializableCheck: false}),
})

export const persistor = persistStore(store);