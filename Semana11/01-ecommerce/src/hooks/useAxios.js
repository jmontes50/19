import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState(null); //para los datos
  const [error, setError] = useState(null); //para los errores
  const [loading, setLoading] = useState(false); //para saber si la petición esta en proceso

  const fetchData = async (url, options = { method:'get', data:null }) => {
    try {
      setLoading(true); //esta cargando
      const response = await axios({url, ...options});
    } catch (error) {
      
    }
  }
}