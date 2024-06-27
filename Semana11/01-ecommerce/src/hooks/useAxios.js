import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = { method: 'get', data: null }, autoFetch = true) => {
  console.table({ url, options, autoFetch })
  const [data, setData] = useState(null); //para los datos
  const [error, setError] = useState(null); //para los errores
  const [loading, setLoading] = useState(false); //para saber si la petición esta en proceso

  const fetchData = async () => {
    try {
      setLoading(true); //esta cargando
      const response = await axios({ url, ...options }); //peticion
      setData(response.data); //axios me da la info en response.data
    } catch (error) {
      setError(error);
    } finally { //que se va ejecutar siempre si o si ya sea la petición tenga éxito o no
      setLoading(false);
    }
  }

  useEffect(() => {
    //autoFetch va a indicar si vamos a ejecutar la solicitud de forma automatica
    if (autoFetch) {
      const startFetch = async () => {
        fetchData()
      }
      startFetch();
    }
  }, [url, options.method, options.data])

  return { data, error, loading, fetchData }
}

export default useAxios;