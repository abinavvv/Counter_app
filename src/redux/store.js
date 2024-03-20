import { configureStore } from "@reduxjs/toolkit";
import kauttSlice from "./kauttSlice";



export const store = configureStore({
    reducer:{
        kautt:kauttSlice
    }
})