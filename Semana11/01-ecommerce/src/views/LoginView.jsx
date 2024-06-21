import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FormUser from "../components/FormUser";
import { registerWithEmail, loginWithEmail } from "../functions/authFunctions";
import { useNavigate } from "react-router-dom";

const LoginView = () => {

  const { LoginWithGoogle } = useContext(AuthContext);
  // console.log(LoginWithGoogle)
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await LoginWithGoogle();
      // console.log("handleLogin ", result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginEmail = async (email, password) => {
    try {
      await loginWithEmail(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleRegisterEmail = async (email, password) => {
    try {
      await registerWithEmail(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container min-h-96 flex justify-center items-center flex-col">
      <FormUser handleLoginEmail={ handleLoginEmail } handleRegisterEmail={ handleRegisterEmail } />
      <button className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center text-lg w-96" onClick={handleLogin}>
        <i className="fa-brands fa-google me-3 fa-2x"></i>Ingresa con Google
      </button>
    </div>
  );
};

export default LoginView;
