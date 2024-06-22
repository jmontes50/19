import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FormUser from "../components/FormUser";
import { registerWithEmail, loginWithEmail } from "../functions/authFunctions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import firebaseErrorsInSpanish from "../utils/firebaseErrorMessages";

const LoginView = () => {
  const { LoginWithGoogle } = useContext(AuthContext);
  // console.log(LoginWithGoogle)
  const navigate = useNavigate();

  const notify = (msg, callback = {}) => toast(msg, callback);

  const handleLogin = async () => {
    try {
      const result = await LoginWithGoogle();
      // console.log("handleLogin ", result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginEmail = async (email, password) => {
    try {
      const result = await loginWithEmail(email, password);
      console.log("handleLoginEmail", result);
      notify(`Bienvenid@ ${result.user.email}`, {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      // console.log(error.code);
      // console.log(firebaseErrorsInSpanish[error.code]);
      notify(firebaseErrorsInSpanish[error.code], { type: "error" });
    }
  };

  const handleRegisterEmail = async (email, password) => {
    try {
      const result = await registerWithEmail(email, password);
      // console.log(result);
      notify(`Usuario registrado! ${result.user.email}`, {
        type: "success",
        onClose: () => navigate("/"),
      });
    } catch (error) {
      notify(firebaseErrorsInSpanish[error.code], { type: "error" });
    }
  };

  return (
    <div className="container min-h-96 flex justify-center items-center flex-col">
      <FormUser
        handleLoginEmail={handleLoginEmail}
        handleRegisterEmail={handleRegisterEmail}
      />
      <button
        className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center text-lg w-96"
        onClick={handleLogin}
      >
        <i className="fa-brands fa-google me-3 fa-2x"></i>Ingresa con Google
      </button>
    </div>
  );
};

export default LoginView;
