import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";

const store = configureStore({
    reducer: {
        data: dataReducer
    }
})

export default store;