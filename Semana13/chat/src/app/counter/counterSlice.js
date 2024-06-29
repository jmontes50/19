//va a trabajar con el reducer para saber que acciones se pueden realizar, aqui vamos a configurar esas acciones
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  //las acciones para manejar un simple contador
  //este reducer va a necesitar como principio dos tipos de cosas
  //1. un estado, valor inicial
  //2. las acciones a realizar
  name: 'counter',
  initialState: { value: 0 },
  //en los reduces ya indicaremos que acciones queremos realizar
  reducers: {
    //tienen que ser funciones puras, no deberian depender de algo externo
    //la idea es que no tenga complejidad
    increment: (state) => { //el state vendra del estado inicial y/o segùn vaya cambiando
      state.value += 1; //state.value = state.value + 1
    },
    decrement: (state) => {
      state.value -= 1; //state.value = state.value - 1
    },
  }
});

const { increment, decrement } = counterSlice.actions;

export { increment, decrement }; //exportando la acciones
export default counterSlice.reducer;