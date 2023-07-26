import { configureStore } from "@reduxjs/toolkit";
import { listingsSliceReducer } from "./features/listings/listingsSlice";

export const store = configureStore({
	reducer: { listingsSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
