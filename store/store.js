import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";
import cursorMaskReducer from "./cursorMaskSlice";
import windowReducer from "./windowSlice";

export let store = configureStore({
    reducer:{
        showMenu: portfolioReducer,
        cursorMask: cursorMaskReducer,
        window: windowReducer
    }
});