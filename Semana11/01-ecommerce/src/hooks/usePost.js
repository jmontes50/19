import { useState } from "react";

//la idea es que sirva para hacer un post, un put
const usePost = (url, options = { method: 'get', data: null }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios({ url, ...options })
      setData(response.data)
    } catch (error) {
      setError(error)
    }
  }

  return { data, error, fetchData }
}

export default usePost;