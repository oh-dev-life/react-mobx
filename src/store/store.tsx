"use client";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const StoreProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};
