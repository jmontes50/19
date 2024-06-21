import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AuthContext } from "../context/authContext";
import {
  Disclosure,
  Menu,
  Transition,
  DisclosureButton,
} from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { quantityTotal } = useContext(CartContext);

  console.log(user);

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
                {user ? (
                  <Link
                    to="/cart"
                    className="text-gray-400 hover:text-white relative"
                  >
                    <i className="fa-solid fa-cart-shopping fa-2x"></i>
                    {/* Badge */}
                    <div className="bg-yellow-300 text-gray-700 rounded-full w-6 h-6 absolute -right-2 -top-2 text-center font-semibold">
                      {quantityTotal}
                    </div>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
