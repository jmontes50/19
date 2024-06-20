import { useContext } from "react";
import { AuthContext } from "../context/authContext";
//Me redirige hacia algún lugar, pueden pensar en el como un useNavigate en componente
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  console.log( "Protected Route user: " , user );
  //user o es null o es un objeto
  if(user){
    return children;
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute