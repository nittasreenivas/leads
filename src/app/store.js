
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "../services/authApi";
import userReducer from "../features/User/userSlice"
const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
setupListeners(store.dispatch)
export default store