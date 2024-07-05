import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocument, dataListener } from "../app/data/dataSlice";

const Chat = () => {
  const dispatch = useDispatch();

  const { documents, loading, error } = useSelector((state) => state.data);

  const inputNombre = useRef();
  const inputMensaje = useRef();

  const manejarEnvio = () => {
    const nuevoMensaje = {
      nombre: inputNombre.current.value,
      mensaje: inputMensaje.current.value,
      timestamp: Date.now()
    };
    dispatch(addDocument(nuevoMensaje));
  };

  useEffect(() => {
    dispatch(dataListener());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Mensajes */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`
                mb-3 rounded border border-black p-2 w-50 ${
                  doc.nombre === inputNombre.current.value ? 'align-self-end bg-info' : null
                }
              `}
              >
                <p className="m-0">{doc.mensaje}</p>
                <small>{doc.nombre}</small>
              </div>
            ))}
          </div>
        </div>
        {/* Inputs */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            placeholder="Nombre"
            ref={inputNombre}
            className="form-control"
          />
          <textarea
            ref={inputMensaje}
            placeholder="Mensaje"
            className="form-control"
          ></textarea>
          <button className="btn btn-primary" onClick={manejarEnvio}>
            Enviar!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
