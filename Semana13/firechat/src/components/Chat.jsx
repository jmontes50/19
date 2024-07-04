import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDocument } from '../app/data/dataSlice';

const Chat = () => {
  
  const dispatch = useDispatch();

  const state = useSelector((state) => state.data);
  console.log("DATA: ", state);
  
  const inputNombre = useRef();
  const inputMensaje = useRef();

  const manejarEnvio = () => {
    const nuevoMensaje = {
      nombre:inputNombre.current.value,
      mensaje: inputMensaje.current.value
    }
    dispatch(addDocument(nuevoMensaje));
  }

  return (
    <div>
      <input 
        type="text"
        placeholder='Nombre'
        ref={inputNombre}
        className='form-control'
      />
      <textarea
        ref={inputMensaje}
        placeholder='Mensaje'
        className='form-control'
      ></textarea>
      <button 
        className='btn btn-primary'
        onClick={manejarEnvio}
      >
        Enviar!
      </button>
    </div>
  )
}

export default Chat