import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk('nombre para identificar la acción', funcion asincrona)
const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    //la función asincrona puede recibir 02 argumentos
    //1ero si es que hay que pasarle alguna información al momento del dispatch, el id de un Usuario, la data de un post
    //2do es un objeto que me da el createAsyncThunk, que me permite disparar un accion, dar un error, mediante metodos que incluye este objeto
    async (page = 1, thunkAPI) => {
        try {
            const result = await fetch(`https://reqres.in/api/users?page=${page}`)
            return result.json()
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const dataSlice = createSlice({
    name: 'users',
    state: {
        listUsers:[],
        loading: 'idle', //loading, fulfilled, rejected
        error: null
    },
    reducers:{}, //podriamos tener algun reducer pero como tiene que ser una función pura, no podriamos manejar funciones con Promesas o asincronas,
    extraReducers: (builder) => {//manejar acciones que no estan consideradas en los reducers originalmente, utiles para tareas asincronas con el createAsyncThunk
        //addCase recibe 02 argumentos, el estado a manejar y el callback para ejecutar la acción a cambiar dentro del state
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'succeded',
            state.listUsers.push(action.payload)
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'failed',
            state.error = action.error
        })
    }
})

//Como no tengo acciones en reducers, puedo obviar el dataSlice.actions

export default dataSlice.reducer;

export {
    fetchUsers
}