import { configureStore } from "@reduxjs/toolkit";

//Reducer slices
import appReducer from './features/appSlice'

export const store = configureStore({
  //this is where we would specifiy all our reducers ~We only have 1
  reducer: {
    app: appReducer
  }
}) 


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch