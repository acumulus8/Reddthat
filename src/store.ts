import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { listingsSliceReducer } from "./features/listings/listingsSlice";
import { authenticationSliceReducer } from "./features/authentication/authenticationSlice";

export const store = configureStore({
	reducer: { listings: listingsSliceReducer, authentication: authenticationSliceReducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
