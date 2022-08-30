import { configureStore } from "@reduxjs/toolkit";

//Reducer slices
import appReducer from './features/appSlice'
//Services
import {bitcoinApi} from './services/app'

export const store = configureStore({
  //this is where we would specifiy all our reducers ~We only have 1
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
    app: appReducer

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bitcoinApi.middleware)
}) 


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch