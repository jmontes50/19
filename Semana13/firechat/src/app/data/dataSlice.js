import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

// thunk, van a ser funciones que retornar otras funciones y que se van a comportar como una acción a ejecutar. Con el objetivo de manejar tareas asíncronas
//createAsyncThunk('nombreevento', callbackConLaTareaAsincrona)
const addDocument = createAsyncThunk(
  'data/addDocument',
  //documento sera el objeto que reciba para guardarlo en firestore
  async (documento, thunkAPI) => {
    try {
      //collection recibe(refBD, 'nombre_coleccion)
      const docRef = await addDoc(collection(db, 'mensajes'), documento);
      console.log("docRef: ", docRef);
      return { id:docRef.id, ...documento }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

















/*
https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es&authuser=0
Firestore tiene 02 métodos para agregar documentos, setDoc y addDoc

Vamos a utilizar addDoc ya que este no necesita un id requerido, firestore lo genera solito
*/