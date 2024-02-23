import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";
import FavReducer from "./FavReducer";

export const store = configureStore({
    reducer : {
        user : UserReducer,
        fav : FavReducer
    }
})