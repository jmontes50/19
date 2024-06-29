import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AuthContext } from "../context/authContext";
import { closeSession } from "../functions/authFunctions";
import {
  Disclosure,
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebaseErrorsInSpanish from "../utils/firebaseErrorMessages";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { quantityTotal } = useContext(CartContext);

  const notify = (msg, callback = {}) => toast(msg, callback);

  const handleLogout = async () => {
    try {
      await closeSession();
      notify("Cerro sesión correctamente", { type: "success" });
    } catch (error) {
      // console.log(error);
      notify(firebaseErrorsInSpanish[error.code], { type: "error" });
    }
  }

  return (
    <Disclosure as="nav" className="bg-sky-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* {boton responsive para sm} */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir Menú</span>
                  {/* si esta abierto, enseña la X si esta cerrado enseña la 🍔 */}
                  {open ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </DisclosureButton>
              </div>
              {/* Links en formato desktop */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* {links} */}
                  <Link
                    to="/"
                    className="text-gray-200 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-200 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-semibold"
                  >
                    Login
                  </Link>
                  {user ? (
                    <Link
                      to="/cart"
                      className="text-gray-200 hover:bg-gray-700 hover:text-white, rounded-md px-3 py-2 text-sm font-semibold relative"
                    >
                      <i className="fa-solid fa-cart-shopping me-2"></i>Carrito
                      <div className="bg-yellow-300 text-gray-700 rounded-full w-6 h-6 absolute -right-2 -top-2 text-center font-semibold">
                        {quantityTotal}
                      </div>
                    </Link>
                  ) : null}
                </div>
              </div>
              {/* derecha */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* user es null o un objeto */}
                {/* user es algo verdadero y user.photoURL es verdadero para que ambos sean V */}
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="rounded-full w-6 h-6 inline-block me-2"
                  />
                ) : (
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user"
                    className="rounded-full w-6 h-6 inline-block me-2"
                  />
                )}
                {/* si yo no se si un objeto tiene determinada propiedad, puedo añadir ?. antes de la propiedad, si no existe me dara un undefined, el undefined es un valor falsy */}
                <Menu>
                  <MenuButton>
                    {user?.displayName ? (
                      <span className="font-bold text-white">
                        {user.displayName}
                      </span>
                    ) : (
                      <span className="font-bold text-white">
                        {user?.email}
                      </span>
                    )}
                  </MenuButton>
                  <MenuItems anchor="bottom">
                    <MenuItem>
                      <button className="bg-sky-600 text-white px-5 py-4 rounded w-48 font-semibold" onClick={handleLogout}>
                        Cerrar sesión
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          {/* Disclosure Panel Responsive */}
          <DisclosurePanel className="sm:hidden">
            <div className="my-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
            </div>
            <div className="my-1 px-2 pb-3 pt-2">
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>

            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
