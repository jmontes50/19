import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'users',
    state: {
        listUsers:[],
        loading: 'idle',
        error: null
    },
    reducers:{}, //podriamos tener algun reducer pero como tiene que ser una función pura, no podriamos manejar funciones con Promesas o asincronas,
    extraReducers: (builder) => {//manejar acciones que no estan consideradas en los reducers originalmente, utiles para tareas asincronas con el createAsyncThunk
        builder.
        addCase()
    }
})