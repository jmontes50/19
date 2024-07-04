//va a servir de fuente de la verdad y va a registrar con los reducer que acciones se pueden realizar
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import dataReducer from "./data/dataSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: dataReducer
    }
})

export default store;