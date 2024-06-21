import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FormUser from "../components/FormUser";

const LoginView = () => {

  const { LoginWithGoogle } = useContext(AuthContext);
  // console.log(LoginWithGoogle)

  const handleLogin = async () => {
    try {
      const result = await LoginWithGoogle();
      // console.log("handleLogin ", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container min-h-96 flex justify-center items-center flex-col">
      <FormUser />
      <button className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center text-lg w-96" onClick={handleLogin}>
        <i className="fa-brands fa-google me-3 fa-2x"></i>Ingresa con Google
      </button>
    </div>
  );
};

export default LoginView;
