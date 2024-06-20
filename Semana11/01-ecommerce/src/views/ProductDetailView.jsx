import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import CircleColor from "../components/CircleColor";
import convertDateToLocal from "../utils/parseDate";

const ProductDetailView = () => {
  const { id } = useParams();

  const URL = import.meta.env.VITE_ENDPOINT_BASE;
  //product/:id
  //GET
  //No tengo que enviar cuerpo en la petición
  const { data, error, loading } = useAxios(`${URL}/productos/${id}`);
  console.log({data});

  if(loading || data === null){
    return <p>Cargando contenido...</p>
  }

  if(error){
    return <p>Hubo un error, vuelva a actualizar en unos minutos</p>
  }

  const { marca, nombre, precio, categoria, foto, descripcion, opiniones, fecha, color } = data;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* contenido izq */}
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                { marca }
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                { nombre }
              </h1>
              {/* pestañas */}
              <div className="flex mb-4">
                <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                  Descripción
                </a>
                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a> */}
              </div>
              {/* descripcion */}
              <p className="leading-relaxed mb-4">
                { descripcion }
              </p>
              {/* especificaciones */}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Categoria</span>
                <span className="ml-auto text-gray-900">{ categoria }</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Fecha</span>
                <span className="ml-auto text-gray-900">{ convertDateToLocal(fecha) }</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">
                  <CircleColor color={color} />
                </span>
              </div>
              {/*  */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  S/ { precio }
                </span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Comprar
                </button>
                {/* 💓 */}
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button> */}
              </div>
            </div>
            {/* contenido der - img */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={ foto }
            />
          </div>
          {/* reseñas */}
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto">
            <h2 className="text-xl mb-5">Reseñas</h2>
            <textarea className="border-3 rounded w-full mb-3 outline p-3" placeholder="Deja tu opinión aquí...">
            </textarea>
              {opiniones.length > 0 ? opiniones.map((opinion, i) => (
                <div className="w-full p-3 border-2 rounded mb-4" key={i}>
                  { opinion }
                </div>
              )) : <p className="w-full p-3 mb-4">
                No se encontraron reseñas, deja tu la primera!
                </p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailView;
